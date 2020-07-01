import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav } from 'react-bootstrap';

const Services = () => (
  <Layout>
    <SEO title="Services" />
     <Container>
     <h1 className='page-heading font-weight-bold'>Services</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
     </Container>
  </Layout>
)

export default Services
