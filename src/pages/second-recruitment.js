import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';
import CareerFooter from "../components/career-footer"

  const SecondRecruitment = () => (
    <Layout>
        <SEO title="Career" />
        <section className='main-section mt-0 mt-lg-4'>
            <Container className="px-3 px-xl-2">
                <div className='top-wrap px-2 px-lg-0'>
                    <h1 className='page-heading font-weight-bold'>
                        Careers at Ivision Web Studio
                    </h1>
                    <p className='description mb-3'>
                        Let's work together to create game-changing experience.
                    </p>
                </div>  
            </Container>
            <div className="bg-color">
                <Container className="content pt-80 px-3 px-xl-2">
                    <div className="px-2 px-lg-0">
                        <h5 className="mb-3">Front End Developer</h5>
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
                                <span> XHTML / HTML5, CSS2.1 / CSS3, JavaScript, jQuery, Bootstrap, Angular.JS</span>
                            </p>
                            <div>
                                <strong > Job Description: </strong>
                                <div className="bullet mt-3">
                                    <ul>
                                        <li><p>Strong knowledge in HTML4, HTML5, CSS3</p></li>
                                        <li><p>Strong knowledge in advanced JavaScript using OOPS concept &amp; good knowledge in Jquery</p></li>
                                        <li><p>Moderate to expert knowledge in AJAX, JSON and XML</p></li>
                                        <li>
                                            <p>
                                                Ability to create interactive HTML5 templates like Drag and Drop, Single select, 
                                                Multiple select, Tab interactivity in HTML5 using JavaScript and Jquery Knowledge of 
                                                HTML5 Audio and Video tags and cross platform issues related to audio and video
                                            </p>
                                        </li>
                                        <li><p>Conversion of design into CSS/DIV layouts qualifying W3C Standards</p></li>
                                        <li><p>Knowledge in HTML without using Dreamweaver/FrontPage tool is a definite plus</p></li>
                                        <li><p>Understands graphic design and digital layout basics</p></li>
                                        <li>
                                            <p>
                                                Ability to develop Applications using HTML 5 and JavaScript that will run effectively 
                                                on touch screen devises like the iPhone / iPad
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Should be aware of Use responsive techniques to build interface for multiple screen 
                                                resolution
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Communicate effectively with project managers, technical leads, and other internal
                                                team members
                                            </p>
                                        </li>
                                        <li><p>Document, organize, and maintain new code, helping to grow the company's code base</p></li>
                                        <li><p>Testing cross-browser, cross-platform, and/or cross-device compatibility for inconsistencies</p></li>
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

export default SecondRecruitment
