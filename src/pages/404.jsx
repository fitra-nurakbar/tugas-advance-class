import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css"

export default function PageNotFound() {
  return (
    <Layout title={"404"}>
      <h1 className={styles.message}>Page not found</h1>
    </Layout>
  );
}
