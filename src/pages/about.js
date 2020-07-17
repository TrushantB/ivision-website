import React from "react"
import image from './../images/image.jpg';
import award from './../images/a.png'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/scss/main.scss'
import Card from "../components/card"
import AboutCard   from "../components/about-card"
import Accordian from "../components/accordian"
import FontAwesome from 'react-fontawesome' 
import dataSource from '../mock-data.json';
import { Container, Col ,Row, Button} from "react-bootstrap"
  
const About = () => (
  <Layout>
    <SEO title="About" />
      <section className='mt-4 about-wrapper main-section'>
        <Container className='top-wrap pb-4'>
          <h1 className='page-heading font-weight-bold'>Hey, we make beautiful things.</h1>
          {/* <p className='description'>We Make Beautiful Things.</p> */}
          <p>
            Successful businesses require working with full-service web development and digital marketing agencies
            to help them thrive on an online platform. iVision Studio is based in India, and we specialize in 
            offering a wide scope of services in JAM Development, Website Development, Mobile Application 
            Development, E-Commerce Solutions, and CMS Services, Website Designing all in one place.
          </p>
        </Container>
      
        <section className='why-choose-section position-relative'>
          <div className="borders-wrapper">
            <div className="left-site-border"></div>
            <div className="middle-site-border"></div>
            <div className="center-site-border"></div>
          </div>
          <Container >
            <Row>
              <Col lg='4' sm='7'>
                <div className='services-wrap subititle-wrap'>
                  <p className='subtitle'>
                    Why choose us?
                  </p>
                  <h2 className='main-title'>
                      We're a team of creatives who are excited about unique ideas.
                  </h2>
                </div>
              </Col>
              <Col lg='1'></Col>
              <Col lg='7' >
                <Row>
                  {
                    dataSource.WhyChooseUs.map((item,index) => {
                      if(index < 4) {
                        return (
                          <Col lg='6' md='6' key={index}>
                          {/* <Card data={item} index={index}/> */}
                          <AboutCard data={item} index={index}/>
                        </Col>

                        )
                      }
                    })
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <section>
          <div className='company-services'>
            <Container fluid className='p-0'>
              <Row className='m-0'>
                <Col lg='5' className='p-0'>
                  <div className='image-wrapper'>
                    <img src={image} height='100%' width='100%'/>
                  </div>
                </Col>
                <Col lg='7'>
                  <Container>
                    <Row>
                      <Col lg='12'>
                        <div className='body'>
                          <div>
                            <h3 className='heading mb-5'>
                              As a company, iVision Studio, strives to optimize its services by following the given input:
                            </h3>
                          </div>
                          <div>
                            <ul>
                              <li>Highest quality standards</li>
                              <li>Personalized attention</li>
                              <li>Out-of-the-bpy-5ox thinking</li>
                              <li>Results-focused innovation</li>
                              <li>Business-oriented solutions</li>
                              <li>State-of-the-art web development tools</li>
                            </ul>
                          </div>
                      </div>
                      </Col>
                  </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </section> */}

        <section className='optimize-services bg-color pb-5'>
          <Container fluid >
            <Row>
              <Col lg='5' className="p-0">
                <div className='card border-0'>
                  <div className='card-body right-body'>
                      <div className='play-video  d-flex align-items-center mb-4'>
                        {/* <Link to ='#'>
                          <div className='play-icon mr-3'>
                            <img src={play} width='100%'/>
                          </div>
                        </Link>
                        <span className='font-weight-bold'>Play Video</span> */}
                      </div>
                      <div>
                        <h3 className='title mb-3'>
                          As a company, iVision Studio, strives to optimize its services below
                        </h3>
                      </div>
                      <div>
                        <ul className="pl-5 pt-3 optimize-services-list">
                          <li>Highest quality standards</li>
                          <li>Personalized attention</li>
                          <li>Out-of-the-box thinking</li>
                          <li>Results-focused innovation</li>
                          <li>Business-oriented solutions</li>
                          <li>State-of-the-art web development tools</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </Col>
              <Col lg='7' className="p-0">
                  <div className='capabilities-wrap subititle-wrap'>
                      <div className='image'>
                      <img src={image} width='100%'/>
                      </div>
                  </div>
              </Col>
              
            </Row>
          </Container>
        </section>

        <section className='why-choose-section position-relative'>
          <div className="borders-wrapper">
            <div className="left-site-border"></div>
            <div className="middle-site-border"></div>
            <div className="center-site-border"></div>
          </div>
          <Container >
            <Row>
              <Col lg='4' sm='7'>
                <div className='services-wrap subititle-wrap'>
                  <p className='subtitle'>
                    Why choose us?
                  </p>
                  <h2 className='main-title'>
                    We make beautiful things
                  </h2>
                </div>
              </Col>
              <Col lg='1'></Col>
              <Col lg='7' >
                <Row>
                  {
                    dataSource.OurStrategies.map((item,index) => {
                      if(index < 4) {
                        return (
                          <Col lg='6' md='6' key={index}>
                          {/* <Card data={item} index={index}/> */}
                          <AboutCard data={item} index={index}/>
                        </Col>
      
                        )
                      }
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

export default About
