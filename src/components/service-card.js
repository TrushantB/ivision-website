import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const ServiceCard = ({ siteTitle }) => (
    <div className='services-card-wrapper mb-5'>
        <div className='border-left body'>
            <p> 01. </p>
            <h4 className='subheading'>JAM Development</h4>
            <p className='font-weight-bold'>Gatsby /Hugo/Jekyll / Contentful / Netlify</p>
            <p>
            Creating a higher spacing and how people move through a unique and impactful campaign.
            </p>
            <a className='read-more' href='#'>Read More</a>
        </div>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default ServiceCard
