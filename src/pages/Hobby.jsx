import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Border from "../components/Border";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { CommonContext } from "../context/CommonContext";

export default function Hobby() {
  const { updateCommonState } = useContext(CommonContext);

  useEffect(() => {
    updateCommonState({
      title: 'Hobby',
      color: '#fff700',
    });
  }, [updateCommonState]);

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
