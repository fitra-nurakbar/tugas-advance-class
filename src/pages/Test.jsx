import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Test.module.css";

export default function Test() {
  return (
    <Layout title={"Test"}>
      <div className={styles.container}>
        <div className={styles.block}>Hello There👋</div>
        <div className={styles.block}>Hello There👋</div>
        <div className={styles.block}>Hello There👋</div>
      </div>
    </Layout>
  );
}
