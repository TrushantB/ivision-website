import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import ServiceMeunList from "../components/service-menu-list"
import dataSource from '../mock-data.json';

const StaffingSolution = () => {

    let content = dataSource.Services.find(obj =>  obj.slug=='/staffing-solutions')
    console.log(content)

    return(
        <Layout>
            <SEO title="Service" />
            <section className='services-details main-section mt-0 mt-lg-4'>
                <Container className=' px-3 px-xl-2'>
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
                <div className='details-wrapper bg-color pt-80 pb-5'>
                    <Container className=' px-3 px-xl-2'>
                        <Row>
                            <Col xl='3' md="4">
                                <ServiceMeunList/>
                            </Col>
                            <Col xl='9' md="8">
                                <div className='mb-4 mb-md-5 px-2 px-lg-0'>
                                    <h3>{content.heading1}</h3>
                                    {
                                        content.heading1_content.map((item,index) => {
                                            return(
                                                <>
                                                    <p>{item.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className='my-3 my-md-4'>
                                    <h3>{content.heading2}</h3>
                                    {
                                        content.heading2_content.map((item,index) => {
                                            return(
                                                <>
                                                    <p>{item.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className='my-3 my-md-4'>
                                    <h3>{content.heading3}</h3>
                                    {
                                        content.heading3_content.map((item,index) => {
                                            return(
                                                <>
                                                    <p>{item.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className='my-3 my-md-4'>
                                    <h3>{content.heading4}</h3>
                                    {
                                        content.heading4_content.map((item,index) => {
                                            return(
                                                <>
                                                    <p>{item.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Layout>
    )
}



export default StaffingSolution
