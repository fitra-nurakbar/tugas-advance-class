import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { Container } from "@mui/material";
import axios from "axios";
import { urlMain } from "../../utils/data";
import RecipeReviewCard from "../../components/Card";
import styles from "../../styles/Day-6.module.css";
import FolderList from "../../components/FolderList";
import Loading from "../../components/Loading";

export default function Day6() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios(urlMain + "postgenerated", {
      method: "GET",
      header: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout title={"Day 6"}>
      <Navbar />
      <Container maxWidth={"lg"} sx={{ height: "100vh" }}>
        <div className={styles.container}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className={styles.part}>
                {posts.map((post, index) => (
                  <RecipeReviewCard key={index} data={post} />
                ))}
              </div>
              <div className={styles.part}>
                <FolderList />
              </div>
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}
