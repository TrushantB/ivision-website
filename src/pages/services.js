import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav ,Row,Col} from 'react-bootstrap';
import ServiceCard from "../components/service-card";
import dataSource from '../mock-data.json';
const Services = () => (
  <Layout>
    <SEO title="Services" />
    <section className='services-wrapper main-section mt-0 mt-lg-4'>
		<Container className=' px-3 px-xl-2'>
			<div className="top-wrap px-2 px-lg-0">
				<Row>
					<Col>
						<h1 className='page-heading line-heignt0 font-weight-bold'>Services</h1>
						<p className='description mb-3'>What We Do</p>
						<p>
							As a full-service firm, we have developed a unique approach and strategies to help our 
							clients with their projects. We offer a multitude of services to our customers; however, 
							we also tailor our services to meet the demand and requirements of our clients.
						</p>
					</Col>
				</Row>
			</div>
        </Container>
        <section className='bg-color what-we-do pt-80 pb-40'>
          	<Container className="px-3 px-lg-4">
				<Row>
					<Col lg='4'>
						<div className="px-2 px-lg-0">
							<p className='text-uppercase'>Capabilities</p>
							<h2 className='sub-heading'>Creative studio with art & technologies.</h2>
						</div>
					</Col>
					<Col lg='8'  className=''>
						<div className="px-2 px-lg-0">
							<Row>
								{
									dataSource.Services.map((item,index) => {
									return (
										<Col lg='6' sm='6' key={index}>
											<ServiceCard data={item} index={index}/>
										</Col>
									)
									})
								}
							</Row>
						</div>
					</Col>
				</Row> 
          	</Container>
        </section>
    </section>
  </Layout>
)

export default Services
