import { Link,navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';
import '../styles/scss/main.scss';
import logo from './../images/logo.jpg';
import FontAwesome from 'react-fontawesome'

  const CareerFooter = () => (
    <div className="career-footer-content">
        <Container fluid >
            <Row>
                <Col lg="6" md="12" sm="12" className="p-0">
                    <div className="meet-the-team wrapper px-4">
                        <div className="content">
                            <h4 className="mb-4">Meet the team</h4>
                            <p className="mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley.
                            </p>
                            <button className="button btn btn-primary">
                            <a href="/team" className="text-decoration-none">Meet our team</a>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="12" sm="12" className="p-0">
                    <div className="get-in-touch wrapper px-4">
                        <div className="content">
                            <h4 className="mb-4">Get in touch</h4>
                            <p className="mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley.
                            </p>
                            <button className="button btn btn-primary">
                            <a href="/contact" className="text-decoration-none">Contact Us</a>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default CareerFooter
