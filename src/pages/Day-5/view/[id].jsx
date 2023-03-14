import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import { data } from "../../../utils/data";
import { Container } from "@mui/material";
import Navbar from "../../../components/Navbar";

export default function ViewId() {
  const { id } = useParams();

  const user = data[id];
  return (
    <Layout title={"View ID"}>
      <Container maxWidth="md">
        <Navbar />
        <div>{user.name}</div>
        <div>{user.address}</div>
        <div>{user.hobby}</div>
      </Container>
    </Layout>
  );
}
