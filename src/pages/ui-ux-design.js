import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";

const UIDesign = () => (
	<Layout>
		<SEO title="About" />
		<section className='mt-4 about-wrapper main-section'>
			<Container >
				<div className='top-wrap px-2 px-lg-0'>
					<Row>
						<Col>
							<h1 className='page-heading font-weight-bold '>UI / UX Design</h1>
							<p className='description mb-3'>UI/UX Both Work Closely Together</p>
							<p>
								With our Design Thinking technology, rich experience, and a deep understanding of 
								the industry we have achieved new heights across various industries.
								iVision Studio considers designing modern and updated websites for its clients as 
								a backbone of its business. We are familiar with vast techniques and tools to design 
								attractive and professional websites. We work with a team of excellent and proficient 
								website designers, who are experienced in using UX/UI design to design modern websites 
								for you.
							</p>
							<div className='button-wrap'>
								<Button className='button'><Link className='text-white text-decoration-none' to='/contact'>Learn More</Link></Button>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	</Layout>
)

export default UIDesign
