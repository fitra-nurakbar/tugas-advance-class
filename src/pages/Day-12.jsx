import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Border from "../components/Border";
import { Container } from "@mui/material";
import { CommonContext } from "../context/CommonContext";

export default function Day12() {
  const { updateCommonState } = useContext(CommonContext);

  useEffect(() => {
    updateCommonState({
      title: "",
      color: "",
    });
  }, [updateCommonState]);

  return (
    <Layout title={"Day 12"}>
      <Navbar />
      <Container maxWidth="lg">
        <Border>
          <div>Day-12</div>
        </Border>
      </Container>
    </Layout>
  );
}
