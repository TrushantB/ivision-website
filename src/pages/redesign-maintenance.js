import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";

const Redesign = () => (
  	<Layout>
    <SEO title="Service" />
     	<section className='mt-4 about-wrapper main-section'>
			<Container >
				<div className='top-wrap px-2 px-lg-0'>
					<Row>
						<Col>
							<h1 className='page-heading font-weight-bold '>Redesign & Maintenance</h1>
							<p className='description mb-3'>
								Our website maintenance services are tailor made to meet your needs
							</p>
							<p>
								iVision Studio offers redesign maintenance services to its customers, 
								and we take all the measurements to help our clients with updating their websites. 
								We make sure that your website is updated as well as up-to-date, and we scan it 
								thoroughly to avoid any glitches from it.
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

export default Redesign
