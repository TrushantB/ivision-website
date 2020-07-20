import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col,Button} from 'react-bootstrap';
import image from './../images/about.jpg'
import Accordian from "../components/accordian";
import ServiceMeunList from "../components/service-menu-list"

const WebApplication = () => (
  <Layout>
    <SEO title="Service" />
    <section className='mt-4 about-wrapper main-section'>
		<Container >
			<div className='top-wrap px-2 px-lg-0'>
				<Row>
					<Col>
						<h1 className='page-heading font-weight-bold '>Web Application</h1>
						<p className='description mb-3'>Creating online environments</p>
						<p>
							iVision Web Studio, recognized as the best web app development company promises 
							to offer you top notch web application development services at the most competitive 
							pricing. We have specialized in providing flexible and high quality web apps. Our 
							skilled team possess significant expertise to implement modern technologies for web 
							solutions. WE have completed numerous projects successfully and have delivered secure, 
							reliable and web enabled solutions.
						</p>
						<div className='button-wrap'>
							<Button className='button'><Link className='text-white text-decoration-none' to='/contact'>Learn More</Link></Button>
						</div>
					</Col>
				</Row>
			</div>
		</Container>

      	<div className='details-wrapper bg-color pt-80 pb-5'>
			<Container>
				<div>
					<Row>
						<Col xl='3' md="4">
							<ServiceMeunList/>
						</Col>
						<Col xl='9' md="8">
							<div className="px-2 px-lg-0">
								<h3>Web Application Development</h3>
								<p>
								Web Application Development is the creation of application programs that reside on 
								remote servers and are delivered to the user's device over the Internet. for starters,
								web applications don’t require any installation and that means that they can be used 
								almost instantly. At the same time, this also means that nearly all web applications 
								are cloud-based by definition
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
      	</div>
    </section>
  </Layout>
)

export default WebApplication
