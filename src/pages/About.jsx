import React from 'react'
import Layout from '../components/Layout'
import { Container } from '@mui/material'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <Layout title={"About"}>
        <Container maxWidth="md">
            <Navbar />
        </Container>
    </Layout>
  )
}
