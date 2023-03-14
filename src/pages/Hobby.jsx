import { Container } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Hobby() {
  return (
    <Layout title={"Hobby"}>
      <Container maxWidth="md">
        <Navbar />
        <Card>
          <p>When I'm not coding,</p>
          <p>I enjoy playing the guitar🎸.</p>
        </Card>
      </Container>
    </Layout>
  );
}
