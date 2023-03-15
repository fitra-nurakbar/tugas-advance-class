import React from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Border from "../components/Border";

export default function About() {
  return (
    <Layout title={"About"}>
      <Navbar />
      <Container maxWidth="lg">
        <Border>
          <p>Hello There👋</p>
          <p>"I'am Fitra Nurakbar, And I'am a software developer</p>
          <p>with proven experience in creating and designing software."</p>
        </Border>
      </Container>
    </Layout>
  );
}
