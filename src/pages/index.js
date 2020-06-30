import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/scss/main.scss'
import Card from "../components/card"
import { Container, Col ,Row} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
       <Container className='banner-main-wrapper'>
      <Row>
        <Col lg='5'>
          <div className='left-section'>
            <h5 className='title heading'>
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
            <h6 className='heading'>Featured project:</h6>
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
      <section className='gallery-section'></section>
      <section className='capabilties-section'>
        <Container>
          <Row>
            <Col lg='7'>
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
   </main>
  </Layout>
)

export default IndexPage
