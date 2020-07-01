import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome' 

  const Header = ({ siteTitle }) => (
  <header>
   <div className='header-wrap'>
      <div className='header-wrap-inner'>
          <div className='left-part'>
             <div className='menu-icon justify-content-center align-items-center d-flex'>
                <a href='#'>
                  <FontAwesome
                    name="bars"
                    size="1x"
                  />
                  </a>
             </div>
            <div className='logo'>
              <img src={logo} />
            </div>
          </div>
          <div className='right-part '>
          <Nav
              activeKey="/home"
            
            >
          
            <Nav.Item>
              <Nav.Link className='nav-link'>
                <Link to='/' className='link active'>Home </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to='/about' className='link'>About </Link>
                </Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
              <Nav.Link >
                <Link to='/services' className='link'>Services </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to='/career' className='link'>Career </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to='/team' className='link'>Team</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to='/contact' className='link'>Contact</Link>
                </Nav.Link>
            </Nav.Item>
           
          </Nav>
          <Button className='button'>Let's Talk</Button>
          </div>
      </div>
   </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
