import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';
import dataSource from '../mock-data.json';
const ServicesDetails = ({location}) =>{
    let serviceDetails = dataSource.Services.find(obj => obj.id==location.search.split("=")[1]);
   return (
    <Layout>
      <SEO title="Services-details" />
      <section className='mt-5 services-details main-section'>
       <Container >
            <div className='top-wrap'>
                <h1 className='page-heading font-weight-bold '>{serviceDetails.name}</h1>
                <p className='description mb-3'>{serviceDetails.tagline}</p>
                <p>
                {serviceDetails.description}
                </p>
                <div className='button-wrap'>
                  <Button className='button'><Link className='text-white text-decoration-none' to='/contact'>Learn More</Link></Button>
                </div>
            </div>
        </Container>
         <section className='details-wrapper bg-color pt-80'>
             <Container>
                 <div className='mb-5'>
                         <div>
                         <h3>{serviceDetails.heading1}</h3>
                         <Row>
                             {
                                 serviceDetails.heading1_content.map((item,index) => {
                                     return (
                                        <Col md='4' key={index}>
                                        <div className='my-4'>
                                            <h4 className='subtitle '>{item.title}</h4>
                                            <p>
                                            {item.description}
                                            </p>
                                        </div>
                                       </Col>
                                     )
                                 })
                             }

                         </Row>
                     </div>
                     <div>
                         <h3>{serviceDetails.heading2}</h3>
                         <Row>
                             {
                                 serviceDetails.heading2_content.map((item,index) => {
                                     return (
                                        <Col md='4' key={index}>
                                        <div className='my-4'>
                                            <h4 className='subtitle '>{item.title}</h4>
                                            <p>
                                            {item.description}
                                            </p>
                                        </div>
                                       </Col>
                                     )
                                 })
                             }

                         </Row>
                     </div>
                 </div>
                </Container>
         </section>
      </section>
    </Layout>
  )
} 

export default ServicesDetails;
