import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col} from 'react-bootstrap';
import ServiceCard from "../components/service-card";

const Services = () => (
  <Layout>
    <SEO title="Services" />
     <section className='mt-5'>
        <Container>
          <p>What We Do</p>
          <h1 className='page-heading line-heignt mb-5 font-weight-bold'>We make strategies,<br/> design & development<br/>
            to create valuable<br/> products.</h1>
        </Container>
        <section className='bg-color py-5'>
          <Container>
            <Row>
              <Col>
                <div>
                  <p className='text-uppercase'>Capabilities</p>
                  <h2>Creative studio <br/>with art &<br/> technologies.</h2>
                </div>
              </Col>
              <Col lg='4'>
                <ServiceCard/>
              </Col>
              <Col lg='4' >
                <ServiceCard/>
              </Col>
              
            </Row>
          </Container>
        </section>
     </section>
  </Layout>
)

export default Services
