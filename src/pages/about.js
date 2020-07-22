import React from "react"
import image from './../images/capabilities-service.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/scss/main.scss'
import AboutCard   from "../components/about-card" 
import dataSource from '../mock-data.json';
import { Container, Col ,Row, Button} from "react-bootstrap"
  
const About = () => (
	<Layout>
		<SEO title="About" />
		<section className='about-wrapper main-section mt-0 mt-lg-4'>
			<Container className=' px-3 px-xl-2'>
				<div className="top-wrap px-2 px-lg-0">
					<Row>
						<Col>
							<h1 className='page-heading font-weight-bold'>About Us</h1>
							<p className='description mb-3'>We make beautiful things.</p>
							{/* <p className='description'>We Make Beautiful Things.</p> */}
							<p>
								Successful businesses require working with full-service web development and digital marketing agencies
								to help them thrive on an online platform. iVision Studio is based in India, and we specialize in 
								offering a wide scope of services in JAM Development, Website Development, Mobile Application 
								Development, E-Commerce Solutions, and CMS Services, Website Designing all in one place.
							</p>
						</Col>
					</Row>
				</div>
			</Container>
		
			<section className='why-choose-section position-relative pt-80 pb-40'>
				<div className="borders-wrapper">
					<div className="left-site-border"></div>
					<div className="middle-site-border"></div>
					<div className="center-site-border"></div>
				</div>
				<Container className=' px-3 px-xl-2'>
					<div className="px-2 px-lg-0">
						<Row>
							<Col lg='4' sm='8'>
								<div className='services-wrap subititle-wrap mb-5'>
									<p className='subtitle'>Why choose us?</p>
									<h2 className='main-title'>
										We build products within the budget with remarkable quality
									</h2>
								</div>
							</Col>
							<Col lg='1'></Col>
							<Col lg='7' >
								<Row>
									{
										dataSource.WhyChooseUs.map((item,index) => {
										if(index < 4) {
											return (
											<Col lg='6' md='6' key={index}>
											{/* <Card data={item} index={index}/> */}
											<AboutCard data={item} index={index}/>
											</Col>

											)
										}
										})
									}
								</Row>
							</Col>
						</Row>
					</div>
				</Container>
			</section>

			
			<section className='optimize-services bg-color'>
				<Container fluid >
					<Row>
						<Col lg='5' className="p-0">
							<div className='card border-0'>
								<div className='card-body right-body'>
									<div>
										<h3 className='title mb-3'>
											We strives to optimize our services by following the given input:
										</h3>
									</div>
									<div>
										<ul className="pt-3 optimize-services-list">
											<li>Highest quality standards</li>
											<li>Personalized attention</li>
											<li>Out-of-the-box thinking</li>
											<li>Results-focused innovation</li>
											<li>Business-oriented solutions</li>
											<li>State-of-the-art web development tools</li>
										</ul>
									</div>
								</div>
							</div>
						</Col>
						<Col lg='7' className="p-0">
							<div className='capabilities-wrap subititle-wrap'>
								<div className='image'>
									<img src={image} width='100%'/>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='why-choose-section position-relative'>
				<div className="borders-wrapper">
					<div className="left-site-border"></div>
					<div className="middle-site-border"></div>
					<div className="center-site-border"></div>
				</div>
				<Container className="pt-80 pb-40 px-3 px-xl-2">
					<Row>
						<Col lg='4' sm='8'>
							<div className='services-wrap subititle-wrap mb-5'>
								<p className='subtitle'>
									Why choose us?
								</p>
								<h2 className='main-title'>
									We build products within the budget with remarkbale quality
								</h2>
							</div>
						</Col>
						<Col lg='1'></Col>
						<Col lg='7' >
							<Row>
								{
									dataSource.OurStrategies.map((item,index) => {
									if(index < 4) {
										return (
										<Col lg='6' md='6' key={index}>
											{/* <Card data={item} index={index}/> */}
											<AboutCard data={item} index={index}/>
										</Col>
					
										)
									}
									})
								}
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</section>  
	</Layout>
)

export default About
