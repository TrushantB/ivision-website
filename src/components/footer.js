import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav, Row, Col ,InputGroup,FormControl,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/footer-logo.jpg';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
  const Footer = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
   
       <footer>
         <Container className='page-container'> 
           <Row className='main-row'>
             <Col lg='3' md='12'>
              <div className='logo '>
                <img src={logo} />
              </div>
             </Col>
             <Col lg='3' md='6' sm='12'>
                <ul className='footer-list'>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Barcelona</h3>
                    <div>
                      <p className='info'>365 Gran Via de Corts,
                        Catalanes, BA 08015</p>
                    </div>
                  </li>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Rotterdam</h3>
                    <div>
                      <p className='info'>Graaf Florisstraat 22A,<br/>
                          3021 CH Rotterdam,
                          Netherlands</p>
                    </div>
                  </li>
                </ul>
             </Col>
             <Col lg='3' md='6' sm='12'>
                <ul className='footer-list'>
                  <li  className='inner-wrap'>
                    <h3 className='footer-list-title'>Work inquiries</h3>
                    <div>
                      <p className='info mb-0 '>Interested in working with us?</p>
                      <p className='mb-0 font-weight-bold text-white'>hola@ohio.colabr.io</p>
                    </div>
                  </li>
                  <li className='inner-wrap'>
                    <h3 className='footer-list-title'>Phone</h3>
                    <div>
                      <p className='mb-0 font-weight-bold text-white'>Ph: +3.230.705.5448</p>
                    </div>
                  </li>
                </ul>
             </Col>
             <Col lg='3' md='6'sm='12'>
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
                © {new Date().getFullYear()}, Ohio Theme. Made with passion by
                {` `}
                <a href="https://www.gatsbyjs.org" className='info-link'>Colabrio.</a>
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
