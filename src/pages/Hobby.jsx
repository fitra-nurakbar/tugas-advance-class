import { Container } from "@mui/material";
import React from "react";
import Border from "../components/Border"
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Hobby() {
  return (
    <Layout title={"Hobby"}>
      <Navbar />
      <Container maxWidth="lg">
        <Border>
          <p>When I'm not coding,</p>
          <p>I enjoy playing the guitar🎸.</p>
        </Border>
      </Container>
    </Layout>
  );
}
