import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <section className={styles.container}>
        <h1>List tugas :</h1>
        <Link to={"/day-2"}>Day-2</Link>
        <Link to={"/day-3"}>Day-3</Link>
        <Link to={"/day-4"}>Day-4</Link>
      </section>
    </Layout>
  );
}
