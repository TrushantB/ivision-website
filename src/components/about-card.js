import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const AboutCard = ({ siteTitle,data,index}) => (
    <div className='about-card-wrapper pb-3'>
        <div className='body'>
            {/* <p> 0{index + 1}. </p> */}
            <h4 className='subtitle'>{data.name}</h4>
            <p className='font-weight-bold'>{data.tools}</p>
            <p className='description-details'>
             {data.discription}
            </p>
            {/* <Link className='read-more' to={data.slug}>Read More</Link> */}
        </div>
    </div>

 
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default AboutCard
