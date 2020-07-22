import React from "react"
import TeamCard from '../components/team-card'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col} from 'react-bootstrap';
import dataSource from '../mock-data.json';

const Team = () => {
  return (
  <Layout>
    <SEO title="Team" />
    <section className='main-section team-page-wrapper mt-0 mt-lg-4'>
		<div className='top-wrap'>
			<Container className="px-4 px-md-4">
				<h1 className='page-heading font-weight-bold'>Team</h1>
				<p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p>
			</Container>
		</div>
		<div className="bg-color">
			<div className="team-members pt-80 pb-40">
				<Container className="px-4 px-md-4">
					<Row>
						{
							dataSource.Team.map((item,index) => {
								return(
									<Col lg='3' md='4'sm='6' className='mb-2' key={index}>
										<TeamCard data={item}/>
									</Col>
								)
							})
						}
					</Row>
				</Container>
			</div>
		</div>
    </section>
  </Layout>
)
  }
export default Team;

