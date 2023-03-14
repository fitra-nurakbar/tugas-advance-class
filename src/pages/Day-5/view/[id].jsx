import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import { data } from "../../../utils/data";
import { Container } from "@mui/material";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";

export default function ViewId() {
  const { id } = useParams();

  const user = data[id];

  return (
    <Layout title={"View ID"}>
      <Container maxWidth="md">
        <Navbar />
        <Card>
          <p>Name : {user.name}</p>
          <p>Address : {user.address}</p>
          <p>Hobby : {user.hobby}</p>
        </Card>
      </Container>
    </Layout>
  );
}
