import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav } from 'react-bootstrap';

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
     <Container>
         <h1>Blog</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
     </Container>
  </Layout>
)

export default Blog
