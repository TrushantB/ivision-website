import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';

const Career = () => (
  <Layout>
    <SEO title="Career" />
    <section className='mt-5'>
     <Container >
          <div className='top-wrap'>
              <h1 className='page-heading font-weight-bold '>Careers at Ivision Web Studio</h1>
              <p className='description mb-3'>Interested in joining us ?</p>
              <p>
                At iVision Web Studio, we are constantly looking to expand our team of people. If you feel you have what it takes to work in one of India's leading web development companies then <span className='font-weight-bold'>please send us your resume to contact@ivisionstudio.in</span><br/>
                Listed below are the current vacancies at the company, however if you feel you have exceptional skills in any area of the web then we would be more than happy to hear from you.
              </p>
              <div>
                <Button className='primary-button'>Send Us an Email</Button>
              </div>
          </div>
      </Container>
      <section className='bg-color pt-80'>
      <Container className='middle-section'>
        <Row >
          <Col lg='6'>
            <div className='job-article'>
              <div className='mb-4'>
                <h3>PHP Developer with MVC Framework</h3>
                <p className='font-weight-bold mt-4'>Experience: 1-4 years</p>
                <p>
                  <span  className='font-weight-bold'>Skills Required:</span> PHP, MySQL, HTML5, CSS3, JavaScript, JQuery, Ajax and related Technologies
                </p>
              </div>
              <h5 className='mb-4 font-weight-bold'>Job Description:</h5>
              <ul>
                <li>
                  <p>Experience in Web Application Development using PHP/ My SQL.</p>
                </li>
                <li>
                  <p>Should have experience in MVC based PHP Framework such as Yii2, Laravel, Codeigniter</p>
                </li>
                <li>
                  <p>Perform coding to written technical specifications</p>
                </li>
                <li>
                  <p>Should have experience in JavaScript, JQuery, Ajax</p>
                </li>
                <li>
                  <p>Candidates must have Strong analytical and problem- solving skills</p>
                </li>
                <li>
                  <p>Strong experience will be preferred</p>
                </li>
                <li>
                  <p>Team participation Skills. Can handle project independently</p>
                </li>
                <li>
                  <p>Excellent communication skills required</p>
                </li>
              
              </ul>
            </div>
          </Col>
          <Col lg='6'>
            <div className='job-article'>
              <div className='mb-4'>
                <h3>Front End Developer</h3>
                <p className='font-weight-bold mt-4'>Experience: 1-4 years</p>
                <p>
                  <span  className='font-weight-bold'>Skills Required:</span> XHTML / HTML5, CSS2.1 / CSS3, JavaScript, jQuery, Bootstrap, Angular.JS
                </p>
              </div>
              <h5 className='mb-4 font-weight-bold'>Job Description:</h5>
              <ul>
                <li>
                  <p>Experience in Web Application Development using PHP/ My SQL.</p>
                </li>
                <li>
                  <p>Should have experience in MVC based PHP Framework such as Yii2, Laravel, Codeigniter</p>
                </li>
                <li>
                  <p>Perform coding to written technical specifications</p>
                </li>
                <li>
                  <p>Should have experience in JavaScript, JQuery, Ajax</p>
                </li>
                <li>
                  <p>Candidates must have Strong analytical and problem- solving skills</p>
                </li>
                <li>
                  <p>Strong experience will be preferred</p>
                </li>
                <li>
                  <p>Team participation Skills. Can handle project independently</p>
                </li>
                <li>
                  <p>Excellent communication skills required</p>
                </li>
              
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </section>
  </Layout>
)

export default Career
