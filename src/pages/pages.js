import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav } from 'react-bootstrap';

const Pages = () => (
  <Layout>
    <SEO title="Pages" />
     <Container>
         <h1>Pages</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
     </Container>
  </Layout>
)

export default Pages
