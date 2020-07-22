import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import Accordian from "../components/accordian";
import ServiceMeunList from "../components/service-menu-list"
import dataSource from '../mock-data.json';


const WebsiteDevelopment = () => {

    let content = dataSource.Services.find(obj =>  obj.slug=='/website-development')
    console.log(content)

    return(
        <Layout>
            <SEO title="Service"/>
            <section className='services-details main-section mt-0 mt-lg-4'>
                <Container className=' px-3 px-md-4'>
                    <div className='top-wrap px-2 px-lg-0'>
                        <Row>
                            <Col>
                                <h1 className='page-heading font-weight-bold'>{content.name}</h1>
								<p className='description mb-3'>{content.tagline}</p>
								<p>{content.discription}</p>
                                <div className='button-wrap'>
                                    <Button className='button'>
                                        <Link className='text-white text-decoration-none' to='/contact'>
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <section className='details-wrapper bg-color pt-80'>
                    <Container className=' px-3 px-md-4'>
                        <Row>
                            <Col xl='3' md="4">
                                <ServiceMeunList/>
                            </Col>
                            <Col xl='9' md="8">
                                <div className='mb-4 mb-md-5 px-2 px-lg-0'>
                                    <h3>{content.heading1}</h3>
                                    <Row>
                                        {
                                            content.heading1_content.map((item,index) => {
                                                return(
                                                    <Col md='6'>
                                                        <div className='my-3 my-md-4'>
                                                            <h4 className='subtitle'>{item.title}</h4>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </Layout>
    )
}



export default WebsiteDevelopment




