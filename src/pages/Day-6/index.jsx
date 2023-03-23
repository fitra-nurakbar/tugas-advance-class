import { Box, CircularProgress, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import RecipeReviewCard from "../../components/Card";
import FolderList from "../../components/FolderList";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import useAsync from "../../components/useAsync";
import styles from "../../styles/Day-6.module.css";

export default function Day6() {
  // Custom hook get API
  const { loading, data, error } = useAsync(process.env.REACT_APP_BASE_URL);

  let theme = createTheme({
    palette: {
      primary: {
        main: process.env.REACT_APP_COLOR_PRIMARY,
      },
      secondary: {
        main: "#edf2ff",
      },
    },
  });

  return (
    <Layout title={"Day 6"}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container maxWidth={"lg"} sx={{ height: "100vh" }}>
          <div className={styles.container}>
            <div className={styles.part}>
              {loading ? (
                <div className={styles.status}>
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                  <h2>Loading...</h2>
                </div>
              ) : error ? (
                <div className={styles.status}>
                  <h2>Failed to load data</h2>
                </div>
              ) : (
                data.map((post, index) => (
                  // pharsing data props Card
                  <RecipeReviewCard
                    key={index}
                    title={post.title}
                    datePost={post.datePost}
                    img={post.img}
                    description={post.description}
                  />
                ))
              )}
            </div>
            <div className={styles.part}>
              <FolderList />
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}
