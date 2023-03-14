import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

export default function Hobby() {
  return (
    <Layout title={"Hobby"}>
      <Container maxWidth="md">
        <Navbar />
      </Container>
    </Layout>
  );
}
