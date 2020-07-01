import React from "react"
import TeamCard from '../components/team-card'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav, Row ,Col} from 'react-bootstrap';

const Team = () => (
  <Layout>
    <SEO title="Team" />
     <section className='team-wrap '>
      <Container className='mb-5'>
          <h1 className='page-heading font-weight-bold'>Team</h1>
          <p className='description'>The people who work at iVision Web Studio share the vision and values of our community.</p>
      </Container>
      <Container>
        <Row>
          <Col lg='3' md='4'sm='6' className='mb-5'>
           <TeamCard/>
          </Col>
          <Col lg='3'md='4'sm='6' className='mb-5'>
           <TeamCard/>
          </Col>
          <Col lg='3'md='4'sm='6' className='mb-5'>
           <TeamCard/>
          </Col>
          <Col lg='3'md='4'sm='6' className='mb-5'>
           <TeamCard/>
          </Col>
        </Row>
      </Container>
     </section>
  </Layout>
)

export default Team
