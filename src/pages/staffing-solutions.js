import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import ServiceMeunList from "../components/service-menu-list"

const StaffingSolution = () => (
    <Layout>
        <SEO title="Service" />
        <section className='mt-4 about-wrapper main-section'>
            <Container >
                <div className='top-wrap'>
                    <h1 className='page-heading font-weight-bold'>
                        Staffing Solutions
                    </h1>
                    <p className='description mb-3'>
                        Flexible staffing solutions for the agile organisation.
                    </p>
                    <p>
                        A temporary staff can lead to cost savings and enhanced productivity for your organization. 
                        One of the leading temporary agencies, iVision combines innovative technology with the human 
                        touch to save costs, enhance quality, and maximize efficiency for your business. Embrace flexibility 
                        and business freedom with our excellent contract staffing services.
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
            <div className='details-wrapper bg-color pt-80 pb-5'>
                <Container>
                    <Row>
                        <Col lg="3">
                            <ServiceMeunList/>
                        </Col>
                        <Col lg="9">
                            <div className='mb-5'>
                                <h3>Why iVision Web Studio?</h3>
                                <p>A majority of the users prefer using their smartphones to navigate a website 
                                    or an app. The mobile applications should be developed in congruence with a 
                                    user-friendly interface, and we strive to develop top-notch and accessible 
                                    mobile apps for our clients. stantly. At the same time, this also means that 
                                    nearly all web applications are cloud-based by definition
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h3>
                                    The leading staffing solutions provider
                                </h3>
                                <p>
                                    iVision is one of the leading staffing agencies in 
                                    India and comes with years of experience. If you are looking for an ideal 
                                    candidate for vacancies in any sector, be it - banking, finance, marketing, 
                                    etc., then get in touch with us. We will bridge the gap in the employment market 
                                    and find the best talent available for you.
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h3>
                                    The best staffing services
                                </h3>
                                <p>
                                    India is one of the fastest growing countries in the world in terms of Gross 
                                    Domestic Product (GDP) at 8.2%. Considering this growth, there has been an influx 
                                    of FDI in the country as many organizations offer an array of job opportunities in 
                                    various sectors. We provide the best staffing services and matches your requirements 
                                    with that of talented employees.
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h3>
                                    Find experienced candidates
                                </h3>
                                <p>
                                    One of the leading staffing solutions providers in the country - iVision, has 
                                    significant experience in getting skilled employees the job of their dreams 
                                    and making sure that employers find the ideal candidate or the staff that they 
                                    . Get in touch with us today to find experienced candidates in your preferred 
                                    location.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </section>
    </Layout>
)

export default StaffingSolution
