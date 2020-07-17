import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";
import ServiceMeunList from "../components/service-menu-list"

const WebsiteDevelopment = () => (
  <Layout>
    <SEO title="Service"/>
    <section className='mt-5 services-details main-section'>
        <Container>
            <div className='top-wrap'>
                <h1 className='page-heading font-weight-bold'>
                    Website Development
                </h1>
                <p className='description mb-3'>
                    Building smarter websites
                </p>
                <p>
                    iVision Studio specializes in offering top-notch services in the area of web 
                    development. We work with important elements when developing a website for our 
                    clients. We make sure that the theme of the website aligns with the theme of their 
                    business/niche. In addition, we excel in the development of secure and user intuitive 
                    content management systems.
                </p>
                <div className='button-wrap'>
                    <Button className='button'>
                        <Link className='text-white text-decoration-none' to='/contact'>
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
        <section className='details-wrapper bg-color pt-80'>
            <Container>
                <Row>
                    <Col lg="3">
                        <ServiceMeunList/>
                    </Col>
                    <Col lg="9">
                        <div className='mb-5'>
                            <h3>What is the Website Development ?</h3>
                            <Row>
                                <Col md='6'>
                                    <div className='my-4'>
                                        <h4 className='subtitle'>
                                            CMS ( content management system )
                                        </h4>
                                        <p>
                                            A content management system is a software application or set of 
                                            related programs that are used to create and manage digital content.
                                        </p>
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className='my-4'>
                                        <h4 className='subtitle '>Responsive Web Design</h4>
                                        <p>
                                            Ecommerce, also known as electronic commerce or internet commerce, 
                                            refers to the buying and selling of goods or services using the 
                                            internet
                                        </p>
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className='my-4'>
                                        <h4 className='subtitle '>Markup</h4>
                                        <p>
                                            Templated markup should be prebuilt at deploy time, usually using a 
                                            site generator for content sites, or a build tool for web apps.
                                        </p>
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className='mt-5'>
                                        <h4 className='subtitle '>Email Template Development</h4>
                                        <p>
                                            Email templates allow you to customize the formatting and text of 
                                            emails sent by users who share your content. Templates can be 
                                            text-only, or HTML and text, in which case the user’s email client 
                                            will determine which is displayed.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
  </Layout>
)

export default WebsiteDevelopment




