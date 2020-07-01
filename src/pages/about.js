import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav } from 'react-bootstrap';

const About = () => (
  <Layout>
    <SEO title="About" />
     <Container>
         <h1>About</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
     </Container>
  </Layout>
)

export default About
