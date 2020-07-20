import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";
import ServiceMeunList from "../components/service-menu-list"

const JAMDevelopment = () => (

<Layout>
    <SEO title="Service" />
    <section className='mt-5 services-details main-section'>
        <Container>
            <Row>
                <Col>
                    <div className='top-wrap px-2 px-lg-0'>
                        <h1 className='page-heading font-weight-bold '>
                            JAM Development
                        </h1>
                        <p className='description mb-3'>
                            ModernWeb Development Architecture
                        </p>
                        <p>
                            The JAM Development is not about specific technologies. It’s a new way of building 
                            websites and apps that delivers better performance, higher security, lower cost of 
                            scaling, and a better developer experience.
                        </p>
                        <div className='button-wrap'>
                            <Button className='button'>
                                <Link className='text-white text-decoration-none' to='/contact'>
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <section className='details-wrapper bg-color pt-80'>
            <Container>
                <div>
                    <Row>
                        <Col xl='3' md="4">
                            <ServiceMeunList/>
                        </Col>
                        <Col xl='9' md="8">
                            <div className='mb-4 mb-md-5 px-2 px-lg-0'>
                                <h3>What is the JAM Development ?</h3>
                                <Row>
                                    <Col md='6'>
                                        <div className='my-3 my-md-4'>
                                            <h4 className='subtitle'>Javascript</h4>
                                            <p>
                                                Any dynamic programming during the request/response cycle is handled by 
                                                JavaScript, running entirely on the client. This could be any frontend 
                                                framework, library, or even vanilla JavaScript.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='my-3 my-md-4'>
                                            <h4 className='subtitle'>APIs</h4>
                                            <p>
                                                All server-side processes or database actions are abstracted into 
                                                reusable APIs, accessed over HTTPS with JavaScript. These can be 
                                                custom-built or leverage third-party services.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='my-3 my-md-4'>
                                            <h4 className='subtitle'>Markup</h4>
                                            <p>
                                                Templated markup should be prebuilt at deploy time, usually using a site generator
                                                for content sites, or a build tool for web apps.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='mb-4 mb-md-5 px-2 px-lg-0'>
                                <h3>Why the JAM Development?</h3>
                                <Row>
                                    <Col md='6'>
                                        <div className='my-4'>
                                            <h4 className='subtitle'>Better Performance</h4>
                                            <p>
                                                Why wait for pages to build on the fly when you can generate them 
                                                at deploy time? When it comes to minimizing the time to first byte, 
                                                nothing beats pre-built files served over a CDN.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='my-4'>
                                            <h4 className='subtitle'>Higher Security</h4>
                                            <p>
                                                With server-side processes abstracted into microservice APIs, surface
                                                areas for attacks are reduced. You can also leverage the domain expertise 
                                                of specialist third-party services.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </section>
</Layout>

)

export default JAMDevelopment




