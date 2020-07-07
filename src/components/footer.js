import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav, Row, Col ,InputGroup,FormControl,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/ivision_logo-white.png';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
  const Footer = ({ siteTitle }) => (
  <header>
   
       <footer>
         <Container className='page-container'> 
           <Row className='main-row'>
             <Col lg='3' md='12'>
              <div className='logo '>
                <img src={logo} />
              </div>
             </Col>
             <Col lg='3' md='6' sm='6'>
                <ul className='footer-list'>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Address</h3>
                    <div>
                      <p className='info'>IVISION WEB STUDIO, 3rd Floor Nilgiri apartment Karve Road, Erandwane, Near Bajaj Service Station, Opposite SNDT College, Kothrud Pune 411038.</p>
                    </div>
                  </li>
                  {/* <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Rotterdam</h3>
                    <div>
                      <p className='info'>Graaf Florisstraat 22A,<br/>
                          3021 CH Rotterdam,
                          Netherlands</p>
                    </div>
                  </li> */}
                </ul>
             </Col>
             <Col lg='3' md='6' sm='6'>
                <ul className='footer-list'>
                  <li  className='inner-wrap'>
                    <h3 className='footer-list-title'>Work inquiries</h3>
                    <div>
                      <p className='info mb-0 '>Interested in working with us?</p>
                      <a href='mailto:contact@ivisionstudio.in' className='mb-0 font-weight-bold text-decoration-none footer-link'>contact@ivisionstudio.in</a>
                    </div>
                  </li>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Phone</h3>
                    <div>
                      <span className='mb-0 font-weight-bold text-white'>USA </span> <a href='tel: +1 860 967 0120' className='mb-0 font-weight-bold text-decoration-none footer-link'>+1 860 967 0120</a>
                    </div>
                    <div>
                    <span  className='mb-0 font-weight-bold text-white'>IND </span><a href='tel: +91 9130 036 036' className='mb-0 font-weight-bold text-decoration-none footer-link'> +91 9130 036 036</a>
                    </div>
                  </li>
                </ul>
             </Col>
             <Col lg='3' md='6'sm='6'>
                <ul className='subscribe footer-list'>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Stay in touch</h3>
                    <div>
                      <InputGroup className="mb-3">
                          <FormControl
                            className='subscribe-input'
                            placeholder="Your email address"
                            aria-label="Your email address"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Append>
                            <Button variant="outline-secondary" className='subscribe-button'>Subscribe</Button>
                          </InputGroup.Append>
                        </InputGroup>
                    </div>
                  </li>
               
                </ul>
             </Col>
           </Row>
         </Container>
          <Container >
            <div className='site-info-holder'>
              <div className='left info'>
                © {new Date().getFullYear()}, Website Design by
                {` `}
                <a href="https://www.gatsbyjs.org" className='info-link'> iVision Web Studio.</a>
              </div>
              <div>
                <p className='right info m-0'>All right reserved.</p>
              </div>
            </div>
            </Container>
       </footer>
  
  </header>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
