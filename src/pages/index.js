import React from "react"
import { Link } from "gatsby"
import image from './../images/capabilities.jpg';
import project from './../images/mobiport.png'
import project1 from './../images/project1.png'
import project3 from './../images/project2.png'
import project4 from './../images/project4.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/scss/main.scss'
import Card from "../components/card"
import Accordian from "../components/accordian"
import dataSource from '../mock-data.json';
import { Container, Col ,Row, Button} from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FontAwesome from 'react-fontawesome' 

const settings = {
	arrows: false,
	centerMode: true,
	centerPadding: "120px",
	focusOnSelect: false,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 2000,	
	speed: 1200,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            dots: false,
            speed: 1200,
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 580,
          settings: {
            // centerMode: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            // centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        }
      ]
};

const IndexPage = () => (


	<Layout>
		<SEO title="Home" />
			<main className='main-section'>
				<div className="borders-wrapper">
					<div className="left-site-border"></div>
					<div className="middle-site-border"></div>
					<div className="right-site-border"></div>
				</div>

				{/* Banner section start */}
				<section>
					<Container className='banner-main-wrapper'>
						<Row>
							<Col lg='5' md="6" sm="12">
								<div className='left-section'>
									<h5 className=' heading'>
									We are proud of <br/>    
									the works we’ve done.	
									</h5>
									<h1 className='title'>We’re design creators.</h1>
									{/* <div className='more-button'>
										<a className='more-project' href='/services'>More Services</a>
									</div> */}
								</div>
							</Col>
							<Col lg='7' md="6" sm="12">
								<div className='right-section'>
									
								</div>
							</Col>	
						</Row>
					</Container> 
				</section>
				{/* Banner section end */}

				{/* Services section start */}
				<section className='services-section position-relative pt-80'>
					<div className="borders-wrapper">
						<div className="left-site-border"></div>
						<div className="middle-site-border"></div>
						<div className="right-site-border"></div>
					</div>
					<Container className="px-4 px-xl-2">
						<div>
							<Row>
								<Col lg='5' sm='8'>
									<div className='subititle-wrap mb-5'>
										<p className='subtitle'>services</p>
										<h2 className='main-title'>
											Quickly deliver usable and fully-loaded software that is market-ready.
										</h2>
									</div>
								</Col>
								<Col lg='1'></Col>
								<Col lg='6'>
									<Row>
									{
										dataSource.Services.map((item,index) => {
											if(index < 4) {
											return (
												<Col lg='6' md='6' key={index}>
												<Card data={item} index={index}/>
												{/* <ServiceCard data={item} index={index}/> */}
											</Col>
						
											)
											}
										})
									}
									</Row>
								</Col>
							</Row>
						</div>
					</Container>
				</section>
				{/* Services section end */}

				{/* Product slider section start */}
					<section className="product-slider-section pt-4 pt-md-5 pb-4 pb-md-5">
						<Container className="px-4 px-xl-2">
							<Row>
								<Col lg="7">
									<div className='subititle-wrap mb-5'>
										<p className='subtitle'>Featured Projects</p>
										<h2 className='main-title'>
											Expertise and experience of delivering an exact match to your requirements
										</h2>
									</div>
								</Col>
							</Row>
							<Slider {...settings}>
								
								<div className="image-wrapper">
									<a href="" target="_blank" className="slider-img image-ratio">
										<img src={project} />
										<span className="overlay"></span>
									</a>
								
								</div>	
								
								<div className="image-wrapper">
									<a href="" target="_blank" className="slider-img image-ratio">
										<img src={project3} />
										<span className="overlay"></span>
									</a>
									</div>
								
								
									<div className="image-wrapper">
									<a href="" target="_blank" className="slider-img image-ratio">
										<img src={project1} />
										<span className="overlay"></span>
									</a>
									</div>
								
								
									<div className="image-wrapper">
										<a href="" target="_blank" className="slider-img image-ratio">
											<img src={project4} />
											<span className="overlay"></span>
										</a>
									</div>
										
							</Slider>
						</Container>
					</section>
				
				{/* Product slider section end */}


				{/* Capabilties section start */}
				<section className='pt-70 bg-color capabilties-section'>
					<Container className="px-4 px-xl-2">
						<Row>
							<Col lg='7'>
								<div className='capabilities-wrap subititle-wrap'>
									<p className='subtitle'>Capabilities</p>
									<h2 className='main-title'>
										Creative studio for website<br/> 
										design and development
									</h2>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='bg-color pb-0 pb-lg-5 '>
						<Container fluid >
							<Row>
								<Col lg='7' className="p-0">
									<div className='capabilities-wrap subititle-wrap'>
										<div className='image'>
											<img src={image} width='100%'/>
										</div>
									</div>
								</Col>
								<Col lg='5' className="p-0">
									<div className='card border-0'>
										<div className='card-body right-body'>
											<div>
												<h3 className='main-title	'>
													We work in the fields of UI/UX design and art direction.
												</h3>
											</div>
											<div>
												<Accordian/>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</section>
				{/* Capabilties section end */}

				{/* Collaboration section start */}
				<section className='collaboration-section'>
					<Container>
						<div>
							<p className='text-color mb-3'>Collaboration</p>
							<div className='bottom-border'>
								<div className='d-flex align-items-start justify-content-between flex-wrap'>
									<h2 className=' mb-0 text-white title'>
										Got a project?<br/>
										Let’s talk.
									</h2>
									<Button className='primary-button contact-buttom mt-sm-4'><Link className='text-white text-decoration-none' to='/contact'>Contact Us<FontAwesome className='ml-3' name='arrow-right'/></Link></Button>
								</div>
							</div>
							<p className='m-0 text-white decription'>We’re a <span className='font-weight-bold'>team of creatives </span>who are excited about unique ideas and help fin-tech<br/> companies to <span className='font-weight-bold'>create amazing identity</span> by crafting top-notch UI/UX.</p>
						</div>
					</Container>
				</section>
				{/* Collaboration section end */}

			</main>
	</Layout>
)

export default IndexPage
