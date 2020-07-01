import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Accordion,Card} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const Accordian = ({ siteTitle }) => (
    <div className='accordian-wrapper pt-4'>
        <Accordion defaultActiveKey="0">
            <Card className='border-0 '>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='border-0 bg-transparent font-weight-bold'>
                Website & Mobile App Design
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                     <Card.Body className='pt-10'>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card  className='border-0 ' >
                <Accordion.Toggle as={Card.Header} eventKey="1" className='border-0 bg-transparent font-weight-bold'>
                 Motion Graphics & Animation
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                     <Card.Body className='pt-10'>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card  className='border-0 ' >
                <Accordion.Toggle as={Card.Header} eventKey="2" className='border-0 bg-transparent font-weight-bold'>
                User Experience
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                     <Card.Body className='pt-10'>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Accordian
