import { Link } from "react-router-dom";
import { primaryHeader } from "../../../helpers/constant";
import Typography from "../../base/typography";
import styles from "./index.module.scss";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <section className={styles.logo}>
          <Typography className={styles.typoGraphyPrimary}>Reeco</Typography>
        </section>
        <section className={styles.links}>
          {primaryHeader.map((val, index) => {
            return (
              <Link to={`${val.page}`} key={index}>
                <Typography variant="h5" className={styles.typoGraphy}>
                  {val.label}
                </Typography>
              </Link>
            );
          })}
        </section>
      </div>
      <div className={styles.secondary}>
        <section className={styles.info}>
          <Typography className={styles.typoGraphy}>
            Hello James <ChevronDownIcon color="#fff" />
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default Header;
