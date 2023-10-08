import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { CellProps, Column } from "react-table";
import CheckIcon from "../../assets/icons/CheckIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import DataGrid from "../../components/base/data-grid";
import Divider from "../../components/base/divider";
import { Input } from "../../components/base/input";
import Typography from "../../components/base/typography";
import Information from "../../components/common/information";
import {
  modalStyle,
  productData,
  productInformation,
} from "../../helpers/constant";
import styles from "./index.module.scss";
import { Box, Chip, Modal } from "@mui/material";

interface DocumentGrid {
  product_name: any;
  brand: string;
  quantity: string;
  price: string;
  total: string;
  status?: any;
  action?: any;
}

interface ITableData {
  id?: string;
  image?: string;
  product_name: string;
  brand: string;
  quantity: string;
  price: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [product, setProduct] = useState<ITableData>();
  const [value, setValue] = useState("");
  const defferedValue = useDeferredValue(value);

  useEffect(() => {
    setTableData(productData);
  }, []);

  useEffect(() => {
    const values = [...tableData];
    const filteredItems = values.filter((value) =>
      value.product_name.toLowerCase().includes(defferedValue.toLowerCase())
    );
    defferedValue ? setTableData(filteredItems) : setTableData(productData);
  }, [defferedValue]);

  const handleCheckClick = (value) => {
    const demo = [...tableData];
    const newData = demo.map((val) => {
      if (val.id === value.id) {
        return {
          ...val,
          approved: true,
          isUrgentMissing: false,
          isMissing: false,
        };
      }
      return val;
    });
    setTableData(newData);
  };

  const handleCrossClick = (value) => {
    setOpen(true);
    setProduct(value);
  };

  const [documentColumn, documentData] = useMemo(() => {
    const column: Column<DocumentGrid>[] = [
      {
        Header: "Product Name",
        accessor: "product_name",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          return (
            <section style={{ display: "flex", alignItems: "center" }}>
              <img
                src={value.image}
                alt="fruit"
                style={{ height: "30px", width: "30px" }}
              />
              <Typography>{value.product_name}</Typography>
            </section>
          );
        },
      },
      {
        Header: "Brand",
        accessor: "brand",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          return <Typography>{value}</Typography>;
        },
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          return <Typography>{value}</Typography>;
        },
      },
      {
        Header: "Quantity",
        accessor: "quantity",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          return <Typography>{value}</Typography>;
        },
      },
      {
        Header: "Total",
        accessor: "total",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          return <Typography>{value}</Typography>;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          const { isMissing, approved, isUrgentMissing } = value;
          return (
            <>
              {(isMissing || approved || isUrgentMissing) && (
                <Chip
                  variant="filled"
                  color={
                    isUrgentMissing
                      ? "error"
                      : isMissing
                      ? "warning"
                      : approved
                      ? "success"
                      : "default"
                  }
                  label={
                    isUrgentMissing
                      ? "Urgently Missing"
                      : isMissing
                      ? "Missing"
                      : approved
                      ? "Approved"
                      : ""
                  }
                />
              )}
            </>
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (props: CellProps<DocumentGrid>) => {
          const { value } = props;
          const { isMissing, approved, isUrgentMissing } = value;
          return (
            <div style={{ display: "flex", columnGap: "16px" }}>
              <CheckIcon
                color={approved ? "#12b76a" : "#000000"}
                style={{ cursor: "pointer" }}
                onClick={() => handleCheckClick(value)}
              />
              <CrossIcon
                color={
                  isUrgentMissing
                    ? "#ef4136"
                    : isMissing
                    ? "#f79009"
                    : "#000000"
                }
                style={{ cursor: "pointer" }}
                onClick={() => handleCrossClick(value)}
              />
            </div>
          );
        },
      },
    ];

    const row: DocumentGrid[] = tableData.map((val) => ({
      product_name: val,
      brand: val.brand,
      quantity: val.quantity,
      price: val.price,
      total: val.total,
      action: val,
      status: val,
    }));
    return [column, row];
  }, [tableData]);

  return (
    <div className={styles.dashboard}>
      <section className={styles.infoContainer}>
        {productInformation.map((val, index, array) => {
          return (
            <React.Fragment key={index}>
              <Information label={val.label} value={val.value} />
              <Divider
                className={index === array.length - 1 ? styles.hide : ""}
              />
            </React.Fragment>
          );
        })}
      </section>
      <section className={styles.search}>
        <Input
          value={defferedValue}
          endIcon={<SearchIcon />}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
      </section>
      <section className={styles.grid}>
        <DataGrid columns={documentColumn} data={documentData} />
      </section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <span style={{ fontWeight: 600, fontSize: "20px" }}>
            Missing Product
          </span>
          <Typography>
            Is <span>{product?.product_name}</span> urgent?
          </Typography>
          <section
            style={{
              display: "flex",
              justifyContent: "end",
              columnGap: "20px",
              padding: "1rem",
            }}
          >
            <span
              style={{ cursor: "pointer", fontWeight: 600, fontSize: "20px" }}
              onClick={() => {
                const demo = [...tableData];
                const newData = demo.map((val) => {
                  if (val.id === product?.id) {
                    return {
                      ...val,
                      isMissing: true,
                      approved: false,
                      isUrgentMissing: false,
                    };
                  }
                  return val;
                });
                setTableData(newData);
                setOpen(false);
              }}
            >
              No
            </span>
            <span
              style={{ cursor: "pointer", fontWeight: 600, fontSize: "20px" }}
              onClick={() => {
                const demo = [...tableData];
                const newData = demo.map((val) => {
                  if (val.id === product?.id) {
                    return {
                      ...val,
                      isUrgentMissing: true,
                      isMissing: false,
                      approved: false,
                    };
                  }
                  return val;
                });
                setTableData(newData);
                setOpen(false);
              }}
            >
              Yes
            </span>
          </section>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
