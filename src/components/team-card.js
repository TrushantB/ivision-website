import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import profile from './../images/profile.jpg';
import FontAwesome from 'react-fontawesome'

  const TeamCard = ({ siteTitle,data }) => (
    <div className='team-card-wrapper'>
       {/* <div className='card py-3'>
            <div className='card-body'>
                <div className='profile-wrap'>
                    <img src={profile} width='100%'/>
                </div>
                <h5 className='text-center mt-3 mb-2'>Rahul Rawade</h5>
                <p className='text-center m-0 card-text'>Co-Founder</p>
            </div>
       </div> */}
         <div className='profile-wrap'>
            <img src={data.picture} width='100%'/>
            <div className='member-details-wrap'>
                <div className='member-details'>
                    <p className='text-white'>{data.description}</p>
                    <div className='social-link d-flex mt-4'>
                        <div className='circle mr-3'>
                            <a href='#'>
                                <FontAwesome
                                    name="facebook-f"
                                    size="1x"
                                    className='text-white icon'
                                />
                            </a>
                        </div>
                        <div className='circle mr-3'>
                         <a href='#'>
                            <FontAwesome
                                name="linkedin"
                                size="1x"
                                className='text-white icon'
                            />
                          </a>
                        </div>
                        <div className='circle mr-3'>
                          <a href='#'>
                            <FontAwesome
                                name="instagram"
                                size="1x"
                                className='text-white icon'
                            />
                          </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <h5 className='mt-3 mb-0 member-name'>{data.name}</h5>
            <p className='m-0 card-text'>{data.designation}</p>
    </div>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default TeamCard
