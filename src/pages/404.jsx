import React from "react";
import { useRouteError } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout title={"404"}>
      <section className={styles.message}>
        <p>{error.statusText || error.message}</p>
      </section>
    </Layout>
  );
}
