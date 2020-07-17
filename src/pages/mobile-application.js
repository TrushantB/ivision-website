import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";
import ServiceMeunList from "../components/service-menu-list"

const MobileApplication = () => (
  <Layout>
    <SEO title="Service" />
     <section className='mt-4 about-wrapper main-section'>
     <Container >
          <div className='top-wrap'>
              <h1 className='page-heading font-weight-bold '>Mobile Application</h1>
              <p className='description mb-3'>We turn ideas into wonderful Apps</p>
              <p>
              We develop both native and hybrid apps using latest app frameworks for all types of businesses

              </p>
              <div className='button-wrap'>
                <Button className='button'><Link className='text-white text-decoration-none' to='/contact'>Learn More</Link></Button>
              </div>
          </div>
          
      </Container>
      <div className='details-wrapper bg-color pt-80 pb-5'>
        <Container>
          <div>
            <Row>
              <Col lg="3">
                <ServiceMeunList/>
              </Col>
              <Col lg="9">
                <h3>
                  Mobile Application Development
                </h3>
                <p>
                  A majority of the users prefer using their smartphones to navigate a website or an app. 
                  The mobile applications should be developed in congruence with a user-friendly interface, 
                  and we strive to develop top-notch and accessible mobile apps for our clients. stantly. At 
                  the same time, this also means that nearly all web applications are cloud-based by definition
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  </Layout>
)

export default MobileApplication
