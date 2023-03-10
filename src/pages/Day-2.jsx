import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Day-2.module.css";
import Stopwatch from "../components/Stopwatch";
import Drawing from "../components/Drawing";

export default function Day2() {
  return (
    <Layout title={"Day 2"}>
      <section className={styles.container}>
        <p>
          1. Buat component seperti stopwatch seperti pada contoh di kelas,
          hanya saja sekarang tampilan berupa jam : menit : detik{" "}
        </p>
        <Stopwatch />
        <p>
          2. Buat menggunakan html dan css dengan styling grid atau flexbox
          (tidak harus dengan React) untuk membentuk gambar di bawah ini. Link
          gambar:
        </p>
        <Drawing />
      </section>
    </Layout>
  );
}
