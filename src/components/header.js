import { Link,navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import './layout.css'
import FontAwesome from 'react-fontawesome' 

  const Header = ({ siteTitle }) => {

    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    return (
  <header>
   <div className='header-wrap'>
      <div className='header-wrap-inner'>
          <div className='left-part'>
             <div className='menu-icon justify-content-center align-items-center d-flex cursor-pointer'
             onClick={() => openNav()}>
                {/* <a href='#'> */}
                  <FontAwesome
                    name="bars"
                    size="1x"
                  />
                  {/* </a> */}
             </div>
            <div className='logo'>
              <img src={logo} />
            </div>
          </div>
          <div className='right-part '>
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link className='nav-link'>
                <Link to='/' className='link '>Home </Link>
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
   <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
      <Link to='/' className='link' onClick={() => closeNav()}>Home </Link>
      <Link to='/about' className='link' onClick={() => closeNav()}>About </Link>
      <Link to='/services' className='link' onClick={() => closeNav()}>Services </Link>
      <Link to='/career' className='link' onClick={() => closeNav()}>Career </Link>
      <Link to='/team' className='link' onClick={() => closeNav()}>Team</Link>
      <Link to='/contact' className='link' onClick={() => closeNav()}>Contact</Link>  
      <div className='bottom-section'>
        <div className='d-flex info-wrap'>
          <div className='info'>
            <p className='font-weight-bold text-white'>Get In Touch</p>
            <p>541 Melville Ave, Palo Alto, CA 94301,
                ask@ohio.clbthemes.com
                Ph: +1.831.705.5448</p>
          </div>
          <div className='info'>
            <p className='font-weight-bold text-white'>Get In Touch</p>
            <p>541 Melville Ave, Palo Alto, CA 94301,
                ask@ohio.clbthemes.com
                Ph: +1.831.705.5448</p>
          </div>
        </div> 
        <div className='social-link d-flex mt-4'>
            <div className='circle mr-3'>
                <FontAwesome
                    name="facebook-f"
                    size="1x"
                    className='text-white icon'
                />
            </div>
            <div className='circle mr-3'>
                <FontAwesome
                    name="twitter"
                    size="1x"
                    className='text-white icon'
                />
            </div>
            <div className='circle mr-3'>
                <FontAwesome
                    name="instagram"
                    size="1x"
                    className='text-white icon'
                />
            </div>
        </div>
      </div>
    </div>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
