import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";

const About = () => (
  <Layout>
    <SEO title="About" />
     <section className='mt-5 about-wrapper main-section'>
       <Container className='mb-5'>
            <h1 className='page-heading font-weight-bold'>About Us</h1>
            <p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p>
            <p>
              Successful businesses require working with full-service web development and digital marketing agencies to help them thrive on an online platform. iVision Studio is based in India, and we specialize in offering a wide scope of services in JAM Development, Website Development, Mobile Application Development, E-Commerce Solutions, and CMS Services,   Website Designing all in one place.
              We are familiar with the modern and latest practices in digital marketing, and we employ them to help our clients score deliverable and business-oriented outcomes. We work with a team of talented web developers and digital marketers that work closely with our clients to provide them with long-term web development and e-commerce solutions.
              As a full-service firm, we have developed a unique approach and strategies to help our clients with their projects. We offer a multitude of services to our customers; however, we also tailor our services to meet the demand and requirements of our clients.
              iVision Studio strives to provide premium and incomparable services to its valued clients. We also aim to develop long-term and trust-based relationships with our clients. We work with our team of talented individuals to map out and plan projects for our clients at a given budget and timeframe. Our team of professionals specializes in all areas of website development, website designing, CMS development, e-commerce solutions, and much more. We are highly strategic, creative, and technical when it comes to catering to the needs of our valued clients.
            </p>
        </Container>
        <div className='company-services'>
          <Container fluid className='p-0'>
              <Row className='m-0'>
                <Col lg='5' className='p-0'>
                  <div>
                    <img src={image} width='100%'/>
                  </div>
                </Col>
                <Col lg='7'>
               <Container>
                 <Row>
                 <Col lg='12'>
                  <div className='body'>
                    <div>
                      <h3 className='heading mb-5'>As a company, iVision Studio, strives to optimize its services by following the given input:</h3>
                    </div>
                    <div>
                      <ul>
                        <li>
                          Highest quality standards
                        </li>
                        <li>
                          Personalized attention
                        </li>
                        <li>
                            Out-of-the-bpy-5ox thinking
                        </li>
                        <li>
                          Results-focused innovation
                        </li>
                        <li>
                        Business-oriented solutions
                        </li>
                        <li>
                        State-of-the-art web development tools
                        </li>
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

          <div className='bg-color about-company'>
             <Container>
                <Row className='m-0'>
                <Col lg='6' className='pr-5'>
                    <div className='body'>
                      <div>
                        <h3 className='heading'>Why choose us?</h3>
                      </div>
                      <div className='my-5'>
                        <h4>We Deliver On Time</h4>
                        <p>iVision Studio prides itself on delivering projects on time. We set realistic deadlines at a realistic budget, and we follow it accordingly to ensure to deliver the project to our clients on time. We also update our clients along the progress of the projects, and we take their opinion and recommendations into our projects with no questions asked.</p>
                      </div>
                      <div className='my-5'>
                        <h4>We Value Integrity</h4>
                        <p>We consider integrity as a core of our business, and we strive to maintain a trust-based relationship with our clients. We value honesty, and we cater to completing your projects with complete honesty.</p>
                      </div>
                      <div className='my-5'>
                        <h4>You Talk, We Listen</h4>
                        <p>iVision Studio believes in translating the vision of its clients into a reality, and we go above and beyond a mile to provide our clients with everything that they need. You talk, we listen, and we follow accordingly.</p>
                      </div>
                      
                    </div>
                  </Col>
                
                  <Col lg='6' className='pr-5'>
                  <div className='body'>
                      <div>
                        <h3 className='heading'>Our Strategies</h3>
                      </div>
                      <div className='my-5'>
                        <h4>Data-driven marketing strategy</h4>
                        <p>iVision Studio specializes in building dynamic campaigns by employing a data-driven process. We test and optimize website design using modern and innovative tools. As a full-service company, we aim to provide highly business-oriented and deliverable outcomes to our customers.</p>
                      </div>
                      <div className='my-5'>
                        <h4>Easy-to-follow strategy</h4>
                        <p>iVision Studio prides itself on delivering projects on time. We set realistic deadlines at a realistic budget, and we follow it accordingly to ensure to deliver the project to our clients on time. We also update our clients along the progress of the projects, and we take their opinion and recommendations into our projects with no questions asked.</p>
                      </div>
                      <div className='my-5'>
                        <h4>Business-oriented Strategy</h4>
                        <p>iVision Studio prides itself on delivering projects on time. We set realistic deadlines at a realistic budget, and we follow it accordingly to ensure to deliver the project to our clients on time. We also update our clients along the progress of the projects, and we take their opinion and recommendations into our projects with no questions asked.</p>
                      </div>
                      
                    </div>
                  </Col>
                </Row>
            </Container>
          </div>
     </section>
  </Layout>
)

export default About
