import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Accordion,Card} from 'react-bootstrap';
import '../styles/scss/main.scss';
import FontAwesome from 'react-fontawesome'

  const Accordian = ({ siteTitle }) => (
      
    <div className='accordian-wrapper pt-4'>
        <Accordion defaultActiveKey="0">
            <Card className='border-0 '>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='border-0 bg-transparent font-weight-bold'>
                    <FontAwesome className=''
                        name="plus"
                        size="1x"
                        className='pr-3 plus-icon' 
                    />
                    Web Development
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className='pt-10'>
                        We provide different services to our clients including website designing, eCommerce 
                        solution, customized web development, Magento development and UI/UX design.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card  className='border-0 ' >
                <Accordion.Toggle as={Card.Header} eventKey="1" className='border-0 bg-transparent font-weight-bold'>
                     <FontAwesome className=''
                        name="plus"
                        size="1x"
                        className='pr-3 plus-icon'
                    />
                     Mobile Application Development
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className='pt-10'>
                        Our mobile app development process for cross-platforms balances clarity, 
                        features and responsive interfaces.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card  className='border-0 ' >
                <Accordion.Toggle as={Card.Header} eventKey="2" className='border-0 bg-transparent font-weight-bold'>
                    <FontAwesome className=''
                        name="plus"
                        size="1x"
                        className='pr-3 plus-icon'
                    />
                    eCommerce Solutions
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className='pt-10'>
                        We offer professional and effective eCommerce web design and development solutions.
                    </Card.Body>
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
