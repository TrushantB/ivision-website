import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const ServiceCard = ({ siteTitle,data,index}) => (
    <div className='services-card-wrapper'>
        <div className='body'>
            <p> 0{index + 1}. </p>
            <div className="content">
                <h4 className='subheading'>{data.name}</h4>
                <p className='font-weight-bold'>{data.tools}</p>
                <p className='description-details'>
                {data.discription}
                </p>
            </div>
            <Link className='read-more' to={data.slug}>Read More</Link>
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
