import { Link,navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/ivision_logo.png';
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
		<header className='nav-fixed-top'>
			<div className='header-wrap'>
				<div className='header-wrap-inner'>
					<div className='left-part'>
						<div className='menu-icon justify-content-center align-items-center d-flex cursor-pointer'
						onClick={() => openNav()}>
							<span className="top-line"></span>
							<span className="middle-line"></span>
							<span className="bottom-line"></span>
						</div>
						<div className='logo'>
							<Link to='/'><img src={logo} /></Link>
						</div>
					</div>
					<div className='right-part '>
						<Nav activeKey="/home">
							<Nav.Item>
								<div className='nav-link'>
									<Link to='/' className='link '>Home </Link>
								</div>
							</Nav.Item>
							<Nav.Item>
								<div className='nav-link'>
									<Link to='/about' className='link'>About Us</Link>
								</div>
							</Nav.Item>
							<Nav.Item>
								<div className='nav-link'>
									<Link to='/services' className='link'>Services </Link>
								</div>
							</Nav.Item>
							<Nav.Item>
								<div className='nav-link'>
									<Link to='/career' className='link'>Career </Link>
								</div>
							</Nav.Item>
							<Nav.Item>
								<div className='nav-link'>
									<Link to='/team' className='link'>Team</Link>
								</div>
							</Nav.Item>
							<Nav.Item>
								<div className='nav-link' >
									<Link to='/contact' className='link'>Contact</Link>
								</div>
							</Nav.Item>
						</Nav>
						{/* <Button className='button'>
							<Link to='/contact' className='text-white text-decoration-none'>Let's Talk</Link>
						</Button> */}
						<div className="call-action">
							<a href="tel:9130 036 036" className="tel-icon text-decoration-none" >
								<FontAwesome className='text-white'
									name="phone"
									size="lg"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div id="mySidenav" className="sidenav">
				<ul className="p-0">
					<li><a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a></li>
					<li><Link to='/' className='link' onClick={() => closeNav()}>Home </Link></li>
					<li><Link to='/about' className='link' onClick={() => closeNav()}>About Us </Link></li>
					<li><Link to='/services' className='link' onClick={() => closeNav()}>Services </Link></li>
					<li><Link to='/career' className='link' onClick={() => closeNav()}>Career </Link></li>
					<li><Link to='/team' className='link' onClick={() => closeNav()}>Team</Link></li>
					<li><Link to='/contact' className='link' onClick={() => closeNav()}>Contact</Link>  </li>
				</ul>
					<div className='bottom-section'>
						<div className='d-flex info-wrap flex-wrap'>
							<div className='info'>
								<p className='font-weight-bold text-white'>Get In Touch</p>
								<p className='mb-0'><a href='mailto:contact@ivisionstudio.in' className='mb-0 text-decoration-none footer-link'>contact@ivisionstudio.in</a></p>
								<p className='mb-0'><span> USA </span><a href='tel: +1 860 967 0120' className='mb-0 text-decoration-none footer-link'> +1 860 967 0120</a></p>
								<p className='mb-0'><span> IND </span><a href='tel: +91 9130 036 036' className='mb-0 text-decoration-none footer-link'> +91 9130 036 036</a></p>
							</div>
							<div className='info'>
								<p className='font-weight-bold text-white'>Work Inquiry</p>
								<p className='mb-0'>IVISION WEB STUDIO, 3rd Floor Nilgiri apartment Karve Road, Erandwane, Near Bajaj Service Station, Opposite SNDT College, Kothrud Pune 411038.</p>
									{/* <a href='tel: +3.230.705.5448' className='mb-0 text-decoration-none footer-link'>Ph: +3.230.705.5448</a> */}
							</div>
						</div> 
						<div className='social-link d-flex mt-4 mb-4'>
							<div className='circle mr-3'>
								<a href='https://www.facebook.com/ivision.webstudio.9' target='blank' className='d-flex'>
									<FontAwesome
										name="facebook-f"
										className='text-white icon'
									/>
								</a>
							</div>
							<div className='circle mr-3'>
								<a href='https://in.linkedin.com/company/ivision-studio' target='blank' className='d-flex'>
									<FontAwesome
										name="linkedin"
										className='text-white icon'
									/>
								</a>
							</div>
							<div className='circle mr-3'>
								<a href='https://www.instagram.com/ivisionwebstudio/?utm_source=ig_profile_share&igshid=1djd4p8s9673q' target='blank' className='d-flex'> 
									<FontAwesome
										name="instagram"
										className='text-white icon'
									/>
								</a>
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
