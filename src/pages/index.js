import React from "react"
import { Link } from "gatsby"
import image from './../images/image.jpg';
import play from './../images/play.png'
import sponser from './../images/sponser.png'
import award from './../images/a.png'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/scss/main.scss'
import Card from "../components/card"
import Accordian from "../components/accordian"
import FontAwesome from 'react-fontawesome' 

import { Container, Col ,Row, Button} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
       <Container className='banner-main-wrapper'>
      <Row>
        <Col lg='5'>
          <div className='left-section'>
            <h5 className=' heading'>
              We are proud of <br/>    
              the works we’ve done.	
            </h5>
            <h1 className='title'>
              We’re design creators.
            </h1>
            <div className='more-button'>
              <a className='more-project' href='#'>More Project</a>
            </div>
          </div>
          
        </Col>
        <Col lg='1'>
        </Col>
        <Col lg='6'>
          <div className='right-section'>
            <h6 className='font-weight-bold'>Featured project:</h6>
            <h5 className='feature-project-title'>
              <a href='' className='featured-details'>Unique Bowls From<br/> the South Pacific.</a>
            </h5>
          </div>
        </Col>
      </Row>
   </Container> 
       <section className='services-section'>
         <Container>
            <Row>
               <Col lg='5'>
                 <div className='services-wrap subititle-wrap'>
                    <p className='subtitle'>
                      services
                    </p>
                    <h2 className='main-title'>
                       We're a team of creatives who are excited about unique ideas.
                    </h2>
                 </div>
               </Col>
               <Col lg='1'></Col>
               <Col lg='6'>
                 <Row>
                   <Col lg='6'>
                     <Card/>
                   </Col>
                   <Col lg='6'>
                   <Card/>
                   </Col>
                   <Col lg='6'>
                     <Card/>
                   </Col>
                   <Col lg='6'>
                   <Card/>
                   </Col>
                 </Row>
               </Col>
            </Row>
           
         </Container>
       </section>
      <section className='gallery-section bg-color'>
        <Container>
          <Row>
              <Col lg='5'>
                  <div className='capabilities-wrap subititle-wrap'>
                      <p className='subtitle'>
                        Capabilities
                      </p>
                      <h2 className='main-title'>
                      Creative studio with<br/>
                      art & technologies.
                      </h2>
                  </div>
              </Col>
            </Row>
        </Container>
      </section>
      <section className='capabilties-section bg-color'>
        <Container fluid className='p-0'>
          <Row>
            <Col lg='7' className='p-0'>
                 <div className='capabilities-wrap subititle-wrap'>
                    <div className='image'>
                     <img src={image} width='100%'/>
                    </div>
                 </div>
            </Col>
            <Col lg='5' className='p-0'>
              <div className='card border-0'>
                <div className='card-body right-body'>
                    <div className='play-video  d-flex align-items-center mb-4'>
                      <div className='play-icon mr-3'>
                         <img src={play} width='100%'/>
                      </div>
                      <span className='font-weight-bold'>Play Video</span>
                    </div>
                    <div>
                      <h3 className='title'>We work in the fields
                          of UI/UX design and
                          art direction.</h3>
                    </div>
                    <div>
                      <Accordian/>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
      <section className='sponser-section bg-color'>
          <Container>
             <Row>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
               <Col lg='2' md='3' sm='4'>
                <div className='image-wrap'>
                  <img src={sponser} width='100%'/>
                </div>
               </Col>
             </Row>
          </Container>
        </section>
        <section className='award-section '>
         <Container>
            <Row>
               <Col lg='5'>
                 <div className='subititle-wrap'>
                    <p className='subtitle'>
                    AWARDS & HONORS
                    </p>
                    <h2 className='main-title'>
                    The awards won
                      by our project.
                    </h2>
                 </div>
               </Col>
               <Col lg='1'></Col>
               <Col lg='6'>
                 <Row>
                   <p className='mb-5'>Our clients describe us as a product team which <span className='font-weight-bold'>creates amazing UI/UX </span>experiences, <span className='font-weight-bold'> by crafting top-notch</span> user experience.</p>
                   <Col lg='4'>
                      <div className='mb-5'>
                        <img src={award} width='100%'/>
                        <p className='mt-2'><span className='font-weight-bold'>5x</span> Developer Award</p>
                      </div>
                   </Col>
                   <Col lg='4'>
                    <div  className='mb-5'>
                        <img src={award} width='100%'/>
                        <p className='mt-2'><span className='font-weight-bold'>3x</span> Website of the Day</p>
                      </div>
                   </Col>
                   <Col lg='4'>
                    <div  className='mb-5'>
                        <img src={award} width='100%'/>
                        <p className='mt-2'><span className='font-weight-bold'>5x</span>Mobile of the Day</p>
                      </div>
                   </Col>
                   <Col lg='4'>
                     <div  className='mb-5'>
                        <img src={award} width='100%'/>
                        <p className='mt-2'><span className='font-weight-bold'>5x</span> Developer Award</p>
                      </div>
                   </Col>
                 </Row>
               </Col>
            </Row>
           
         </Container>
       </section>
      <section className='collaboration-section'>
          <Container>
             <div>
               <p className='text-color mb-3'>Collaboration</p>
               <div className='bottom-border'>
                  <div className='d-flex align-items-start justify-content-between'>
                      <h2 className=' mb-0 text-white title'>
                        Got a project?<br/>
                          Let’s talk.
                    </h2>
                    <Button className='contact-buttom'>Contact Us<FontAwesome className='ml-3' name='arrow-right'/></Button>
                  </div>
               </div>
               <p className='m-0 text-white decription'>We’re a <span className='font-weight-bold'>team of creatives </span>who are excited about unique ideas and help fin-tech<br/> companies to <span className='font-weight-bold'>create amazing identity</span> by crafting top-notch UI/UX.</p>
             </div>
          </Container>
        </section>
        
   </main>
  </Layout>
)

export default IndexPage
