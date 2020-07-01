import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import profile from './../images/profile1.png';
import FontAwesome from 'react-fontawesome'

  const TeamCard = ({ siteTitle }) => (
    <div className='team-card-wrapper'>
       <div className='card py-3'>
            <div className='card-body'>
                <div className='profile-wrap'>
                    <img src={profile} width='100%'/>
                </div>
                <h5 className='text-center mt-3 mb-2'>Rahul Rawade</h5>
                <p className='text-center m-0 card-text'>Co-Founder</p>
            </div>
       </div>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default TeamCard
