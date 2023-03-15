import React from "react";
import styles from "../styles/Day-5.module.css";

export default function Border({ children }) {
  return <section className={styles.border}>{children}</section>;
}
