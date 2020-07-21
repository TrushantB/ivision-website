import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col,InputGroup,FormControl,Form,Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome' 

const Contact = () => {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			console.log('invalid');
		  event.preventDefault();
		  event.stopPropagation();
		} else {
			event.preventDefault();
			event.stopPropagation();
			console.log("valid");
		}
	
		setValidated(true);
	  };
	return(
		<Layout>
			<SEO title="Contact" />
			<section className='contact-wrapper mt-0 mt-lg-4 main-section '>
				<Container className='mb-3 mb-lg-5 px-3 px-xl-2'>
					<Row>
						<Col 	>
							<h1 className='page-heading font-weight-bold'>Contact Us</h1>
							<p className="description mb-0">
								Need to get in touch with the team? Please fill out our contact form or give us a call.
							</p>
							{/* <p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p> */}
						</Col>
					</Row>
				</Container>
	
				<section className='contact-details bg-color'>
					<Container fluid className="p-0"> 
						<Row className='m-0'>
							<Col md="12" lg="6" className="px-3 px-xl-2">
								<div className='contact-form '>
									<h3 className='mb-4 mb-lg-5 font-weight-bold'>Contact Form</h3>
									<Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} 
										name="My contact form"
										method="post" data-netlify="true" data-netlify-honeypot="bot-field"
										>
										<Form.Row>
											<Form.Group as={Col} className='input-box pr-0 pr-sm-3 ' controlId="formGridEmail">
												<Form.Label>First Name</Form.Label>
												<Form.Control type="name" name="first-name" placeholder="First name" autoComplete="off" required/>
												<Form.Control.Feedback type="invalid">
													The first name field is required.
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label>Last Name</Form.Label>
												<Form.Control type="name" placeholder="Last name" name="last-name" autoComplete="off" required/>
												<Form.Control.Feedback type="invalid">
													The last name field is required.
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label>Your Email</Form.Label>
												<Form.Control type="email" placeholder="Email" name="email" autoComplete="off" required onChange={(e) => {
													setEmail(e.target.value)
												}}/>
												{
													email ? 
												<Form.Control.Feedback type="invalid">
													The email field is invalid.
												</Form.Control.Feedback> :
												<Form.Control.Feedback type="invalid">
												  The email field is required.
											    </Form.Control.Feedback>
												}
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label>Subject</Form.Label>
												<Form.Control type="name" placeholder="Subject" name="subject" autoComplete="off" required/>
												<Form.Control.Feedback type="invalid">
													The subject field is required.
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Form.Group controlId="exampleForm.ControlTextarea1">
											<Form.Label>Message</Form.Label>
											<Form.Control as="textarea" rows="4" placeholder='Message' name="message" />
										</Form.Group>
										<Button className='button' type="submit" onClick={() => setValidated(true)}>Submit</Button>
									</Form>
								</div>
							</Col>
							
							<Col md="12" lg="6" className="p-0">
								<div className='bg-black right-section'>
									<Row className='m-0'>
										<Col sm='6' className='mb-3 mb-md-5' >
											<div className='circle d-flex justify-content-center align-items-center mb-3'>
												<FontAwesome className='text-white'
													name="phone"
													size="lg"
												/>
											</div>
											<h5 className='text-white mb-4'>Phone Number</h5>
											<div>
												<p className="mb-1"> <span className='text-white font-weight-bold'>USA</span><a href='tel: 860 967 0120' className='mb-0 text-decoration-none  footer-link'> +1 860 967 0120</a></p>
												<p><span className='text-white font-weight-bold'>IND</span><a href='tel: 9130 036 036' className='mb-0 text-decoration-none footer-link'> +91 9130 036 036</a></p>
											</div>
										</Col>
										<Col sm='6' className='mb-3 mb-md-5' >
											<div className='circle d-flex justify-content-center align-items-center mb-3'>
												<FontAwesome className='text-white'
													name="envelope"
													size="lg"
												/>
											</div>
											<h5 className='text-white mb-4'>Get in touch</h5>
											<div>
												<p><a href='mailto:contact@ivisionstudio.in' className='mb-0 text-decoration-none footer-link'>contact@ivisionstudio.in</a></p>
											</div>
										</Col>
										<Col sm='6'>
											<div className='circle d-flex justify-content-center align-items-center mb-3'>
												<FontAwesome className='text-white'
													name="map-marker"
													size="lg"
												/>
											</div>
											<h5 className='text-white mb-4'>Post address</h5>
											<div>
												<p className='text-white mb-0'>
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
}

export default Contact
