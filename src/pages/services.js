import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col} from 'react-bootstrap';
import ServiceCard from "../components/service-card";
import dataSource from '../mock-data.json';
const Services = () => (
  <Layout>
    <SEO title="Services" />
     <section className='mt-4 services-wrapper main-section'>
        <Container className='top-wrap pb-4'>
          <h1 className='page-heading line-heignt0
            font-weight-bold'>
          Services</h1>
          <p className='description mb-0'>What We Do</p>
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
                  {
                    dataSource.Services.map((item,index) => {
                      return (
                        <Col lg='6' sm='6' key={index}>
                          <ServiceCard data={item} index={index}/>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Col>
             </Row> 
          </Container>
        </section>
     </section>
  </Layout>
)

export default Services
