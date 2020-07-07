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
     <section className='team-wrap mt-5 main-section'>
      <Container className='top-wrap'>
          <h1 className='page-heading font-weight-bold'>Team</h1>
          <p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p>
      </Container>
      <Container>
        <Row>
          {
            dataSource.Team.map((item,index) => {
              return(
                <Col lg='3' md='4'sm='6' className='mb-5' key={index}>
                <TeamCard data={item}/>
               </Col>
              )
            })
          }
        </Row>
      </Container>
     </section>
  </Layout>
)
  }
export default Team;

