import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const Card = ({ siteTitle }) => (
    <div className='card-wrapper'>
        <p className='subtitle'>
            services
        </p>
        <h4 className='subheading'>Brand Strategy & Art Direction</h4>
        <p>
         Creating a higher spacing and how people move through a unique and impactful campaign.
        </p>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Card
