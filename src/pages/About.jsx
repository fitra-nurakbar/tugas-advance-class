import React from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function About() {
  return (
    <Layout title={"About"}>
      <Container maxWidth="md">
        <Navbar />
        <Card>
          <p>Hello There👋</p>
          <p>"I'am Fitra Nurakbar, And I'am a software developer</p>
          <p>with proven experience in creating and designing software."</p>
        </Card>
      </Container>
    </Layout>
  );
}
