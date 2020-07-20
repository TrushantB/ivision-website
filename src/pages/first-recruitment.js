import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';
import CareerFooter from "../components/career-footer"

  const FirstRecruitment = () => (
    <Layout>
        <SEO title="Career" />
        <section className='main-section mt-0 mt-lg-4'>
            <Container className=' px-4 px-xl-2'>
                <div className='top-wrap px-2 px-lg-0'>
                    <h1 className='page-heading font-weight-bold'>
                        Careers at Ivision Web Studio
                    </h1>
                    <p className='description mb-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>  
            </Container>
            <div className="bg-color">
                <Container className="content pt-80 px-4 px-xl-2">
                    <div className="px-2 px-lg-0">
                        <h5 className="mb-3">PHP Developer with MVC Framework</h5>
                        <p className="mb-0">
                            At iVision Web Studio, we are constantly looking to expand our team of people. 
                            If you feel you have what it takes to work in one of India's leading web development 
                            companies then please send us your resume to <a href="mailto:contact@ivisionstudio.in"> contact@ivisionstudio.in </a>
                        </p>
                        <p>  
                            Listed below are the current vacancies at the company, however if you 
                            feel you have exceptional skills in any area of the web then we would be more 
                            than happy to hear from you.
                        </p>
                        <div class=" br-4 job-article h-100">
                            <p>
                                <strong>Experience</strong>: 1-4 years
                            </p>
                            <p>
                                <strong>Skills Required: </strong> 
                                <span> PHP, MySQL, HTML5, CSS3, JavaScript, JQuery, Ajax and related Technologies</span>
                            </p>
                            <div>
                                <strong > Job Description: </strong>
                                <div className="bullet mt-3">
                                    <ul>
                                        <li><p>Experience in Web Application Development using PHP/ My SQL.</p></li>
                                        <li><p>Should have experience in MVC based PHP Framework such as Yii2, Laravel, Codeigniter</p></li>
                                        <li><p>Perform coding to written technical specifications</p></li>
                                        <li><p>Should have experience in JavaScript, JQuery, Ajax</p></li>
                                        <li><p>Candidates must have Strong analytical and problem- solving skills</p></li>
                                        <li><p>Strong experience will be preferred</p></li>
                                        <li><p>Should be able to work independently on the project/ tasks assigned</p></li>
                                        <li><p>Team participation Skills. Can handle project independently</p></li>
                                        <li><p>Excellent communication skills required</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <CareerFooter/>
            </div>
        </section>
    </Layout>

 
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default FirstRecruitment
