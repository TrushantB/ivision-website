import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col,InputGroup,FormControl,Form,Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome' 

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
   <section className='contact-wrapper mt-4 main-section '>
    <Container className='mb-5'>
          <h1 className='page-heading font-weight-bold'>Contact Us</h1>
          {/* <p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p> */}
      </Container>
      
      <section className='contact-details '>
        <Container className='p-0 p-md-3'> 
          <Row className='m-0'>
            <Col md='6'>
                 <div className=' contact-form pr-4'>
                   <h3 className='mb-5 font-weight-bold'>Contact Form</h3>
                   <Form>
                    <Form.Row>
                        <Form.Group as={Col} className='input-box' controlId="formGridEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="name" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="name" placeholder="Last Name" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="email" placeholder="Subject" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder='Message' />
                    </Form.Group>
                    <Button className='button'>Submit</Button>
                    </Form>
                 </div>
               </Col>
            
            <Col md='6' className='p-0'>
              <div className='bg-black right-section'>
                  <Row className='m-0'>
                    <Col sm='6' className='mb-md-0 mb-4' >
                       <div className='circle d-flex justify-content-center align-items-center mb-3'>
                          <FontAwesome className='text-white'
                            name="phone"
                            size="1x"
                          />
                       </div>
                        <h5 className='text-white mb-4'>Get in touch</h5>
                        <div>
                          <p className='secondary-text-color mb-0 '>
                            Work and general inquiries
                          </p>
                           <p className='mb-0 font-weight-bold'><a href='mailto:contact@ivisionstudio.in' className='mb-0 text-decoration-none footer-link'>contact@ivisionstudio.in</a></p>
                           <p className='mb-0'> <span className='text-white font-weight-bold'>USA</span><a href='tel: +1 860 967 0120' className='mb-0 text-decoration-none f-w-600 footer-link'> +1 860 967 0120</a></p>
                           <p className='mb-0'><span className='text-white font-weight-bold'>IND</span><a href='tel: +91 9130 036 036' className='mb-0 text-decoration-none f-w-600 footer-link'> +91 9130 036 036</a></p>

                        </div>
                        {/* <div className='mt-4'>
                          <p className='secondary-text-color mb-0 '>
                          Assistance hours:
                          </p>
                          <p className='text-white f-w-500 mb-0'>
                             Monday – Friday<br/>
                            6 am to 8 pm EST
                          </p>
                        </div> */}
                    </Col>
                    <Col sm='6'>
                      <div className='circle d-flex justify-content-center align-items-center mb-3'>
                          <FontAwesome className='text-white'
                            name="envelope"
                            size="1x"
                          />
                       </div>
                        <h5 className='text-white mb-4'>Post address</h5>
                        <div>
                          <p className='text-white f-w-500'>
                          IVISION WEB STUDIO, 3rd Floor Nilgiri apartment Karve Road, Erandwane, Near Bajaj Service Station, Opposite SNDT College, Kothrud Pune 411038.
                          </p>
                        </div>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
        <Container fluid className='p-0 bg-black'>
            <div className='bg-black map'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7567.054327732735!2d73.822386!3d18.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e13c52b68392e92!2sivision+studio!5e0!3m2!1sen!2sin!4v1553501385197" style={{width:"100%", height:"404px", frameborder:"0", border:"0", allowfullscreen:""}}></iframe>
            </div>
        </Container>
      
       </section>   
  </Layout>
)

export default Contact
