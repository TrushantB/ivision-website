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
					<Col lg='3' md='12' className="mb-5 mb-xl-0">
						<div className='logo '>
							<Link to='/'><img src={logo} /></Link>
						</div>
					</Col>
					<Col lg='3' md='6' sm='6'  className="mb-4 mb-md-0">
						<ul className='footer-list'>
							<li className='inner-wrap'>
								<h3 className='footer-list-title'>Address</h3>
								<div>
									<p className='info'>
										IVISION WEB STUDIO, 3rd Floor Nilgiri apartment Karve Road, 
										Erandwane, Near Bajaj Service Station, Opposite SNDT College, 
										Kothrud Pune 411038.
									</p>
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
					<Col lg='3' md='6' sm='6'  className="mb-4 mb-md-0">
						<ul className='footer-list'>
							<li  className='inner-wrap'>
								<h3 className='footer-list-title'>Work inquiries</h3>
								<div>
									<p className='info mb-0 '>Interested in working with us?</p>
										<a href='mailto:contact@ivisionstudio.in' className='mb-0 font-weight-bold text-decoration-none footer-link'>
											contact@ivisionstudio.in
										</a>
								</div>
							</li>
							<li className='inner-wrap pt-4'>
								<h3 className='footer-list-title'>Phone</h3>
								<div>
									<span className='mb-0 text-white'>USA </span> 
									<a href='tel: 860 967 0120' className='mb-0 text-decoration-none footer-link'>
										+1 860 967 0120
									</a>
								</div>
								<div>
									<span  className='mb-0 text-white'>IND </span>
									<a href='tel: 9130 036 036' className='mb-0 text-decoration-none footer-link'> 
										+91 9130 036 036
									</a>
								</div>
							</li>
						</ul>
					</Col>
					<Col lg='3' md='6' sm='6'  className="mb-4 mb-md-0">
						<h3 className='footer-list-title'>Follow us on</h3>
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
					</Col>
				</Row>
			</Container>
			<Container >
				<div className='site-info-holder px-2 px-lg-0'>
					<div className='left info'>
						© {new Date().getFullYear()}, Website Design by
						{` `}
						<a href="http://ivisionstudio.in" className='info-link'> iVision Web Studio.</a>
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
