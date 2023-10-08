import React from "react";
import Typography from "../../base/typography";
import styles from "./index.module.scss";

interface IInfoProps {
  label: React.ReactNode;
  value: React.ReactNode;
}

const Information: React.FC<IInfoProps> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <Typography variant="p" className={styles.label}>
          {label}
        </Typography>
        <Typography variant="p" className={styles.value}>
          {value}
        </Typography>
      </section>
    </div>
  );
};

export default Information;
