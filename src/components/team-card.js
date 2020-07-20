import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav ,Button} from 'react-bootstrap';
import '../styles/scss/main.scss';
import FontAwesome from 'react-fontawesome'

  const TeamCard = ({ siteTitle,data }) => (
    <div className='team-card-wrapper'>
       <div className="team-block position-relative">
            <div className="inner-box position-relative">
                <div className="image-box position-relative">
                    <div className="image-wrapper">
                        <img  src={data.picture}  width='100%'/>
                    </div>
                </div>
                <div className="info-box position-absolute">
                    <h4 className="name position-relative">{data.name}</h4>
                    <span className="designation position-relative">{data.designation}</span>
                    <ul className="social-links p-0">
                        <li>
                            <a href="#" target="_blank">
                            <FontAwesome
                                    name="facebook-f"
                                    size="1x"
                                    className='icon'
                                />
                            <span className="social-text">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <FontAwesome
                                name="linkedin"
                                size="1x"
                                className='icon'
                            />
                            <span className="social-text">Linkedin</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <FontAwesome
                                name="instagram"
                                size="1x"
                                className='icon'
                            />
                            <span className="social-text">Instagram</span>
                            </a>
                        </li>
                        
                    </ul>   
                </div>
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
