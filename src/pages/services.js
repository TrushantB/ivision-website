import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col} from 'react-bootstrap';
import ServiceCard from "../components/service-card";

const Services = () => (
  <Layout>
    <SEO title="Services" />
     <section className='mt-5 services-wrapper main-section'>
        <Container className='top-wrap'>
          <p>What We Do</p>
          <h1 className='page-heading line-heignt mb-5 font-weight-bold'>We make strategies,<br/> design & development<br/>
            to create valuable<br/> products.</h1>
        </Container>
        <section className='bg-color what-we-do'>
          <Container>
            <Row>
              <Col lg='4' className='p-0'>
                <div>
                  <p className='text-uppercase'>Capabilities</p>
                  <h2 className='sub-heading'>Creative studio with art & technologies.</h2>
                </div>
              </Col>
              <Col lg='8'  className='p-0'>
                <Row>
                  <Col lg='6' sm='6'>
                    <ServiceCard/>
                  </Col>
                  <Col lg='6' sm='6' >
                    <ServiceCard/>
                  </Col>
                  <Col lg='6'  sm='6'>
                    <ServiceCard/>
                  </Col>
                  <Col lg='6' sm='6' >
                    <ServiceCard/>
                  </Col>
                </Row>
              </Col>
             </Row> 
          </Container>
        </section>
     </section>
  </Layout>
)

export default Services
