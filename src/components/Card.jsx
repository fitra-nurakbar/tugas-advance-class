import React from "react";
import styles from "../styles/Day-5.module.css";

export default function Card({ children }) {
  return <section className={styles.card}>{children}</section>;
}
