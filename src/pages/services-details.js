import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';

const Career = () => (
  <Layout>
    <SEO title="Services-details" />
    <section className='mt-4 services-details main-section'>
     <Container >
          <div className='top-wrap'>
              <h1 className='page-heading font-weight-bold '>JAM Development</h1>
              <p className='description mb-3'>Modern Web Development Architecture</p>
              <p>
              The JAM Development is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.
              </p>
              <div className='button-wrap'>
                <Button className='button'><Link className='text-white text-decoration-none' to='/contact'>Learn More</Link></Button>
              </div>
          </div>
      </Container>
       <section className='details-wrapper bg-color pt-80'>
           <Container>
               <div className='mb-5'>
                   <h3>What is the JAM Development ?</h3>
                   <Row>
                       <Col md='4'>
                        <div className='my-4'>
                            <h4 className='subtitle '>Javascript</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                       </Col>
                       <Col md='4'>
                        <div  className='my-4'>
                            <h4 className='subtitle'>APIs</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                       </Col>
                       <Col md='4'>
                        <div  className='my-4'>
                            <h4 className='subtitle'>Markup</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                       </Col>
                   </Row>
               </div>
               <div>
                   <h3>Why the JAM Development?</h3>
                   <Row>
                       <Col md='4'>
                        <div className='my-4'>
                            <h4 className='subtitle '>Better Performance</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                       </Col>
                       <Col md='4'>
                        <div  className='my-4'>
                            <h4 className='subtitle'>Higher Security</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                       </Col>
                       <Col md='4'>
                        <div  className='my-4'>
                            <h4 className='subtitle'>Better Developer Experience</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                        
                       </Col>
                       <Col md='4'>
                        <div  className='my-4'>
                            <h4 className='subtitle'>Cheaper, Easier Scaling</h4>
                            <p>
                            Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
                            </p>
                        </div>
                        
                       </Col>
                   </Row>
               </div>
           </Container>
       </section>
    </section>
  </Layout>
)

export default Career
