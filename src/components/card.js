import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const Card = ({ siteTitle ,data}) => (
    <div className='card-wrapper'>
        <p className='subtitle'>
            {data.name}
        </p>
        <h4 className='subheading'>{data.tagline}</h4>
        <p>
        {data.discription}
        </p>
         <Link className='read-more' to='/services-details'>Read More</Link>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Card
