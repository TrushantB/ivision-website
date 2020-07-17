import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/scss/main.scss';

  const ServiceMeunList = () => (

    <div className="service-menu-list">
        <h5> Services Links</h5>
        <ul>
            <li>
                <Link className='text-decoration-none' to='/jam-development'>
                    JAM Development
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/web-application'>
                    Web Application
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/mobile-application'>
                    Mobile Application
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/website-development'>
                    Website Development
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/ui-ux-design'>
                    UI / UX Design
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/redesign-maintenance'>
                    Redesign & Maintenance
                </Link>
            </li>
            <li>
                <Link className='text-decoration-none' to='/staffing-solutions'>
                    Staffing Solutions
                </Link>
            </li>
        </ul>
    </div>

 
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default ServiceMeunList
