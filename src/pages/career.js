import React from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Nav,Col,Row, Button } from 'react-bootstrap';
import CareerFooter from "../components/career-footer"
import Slider from "react-slick";
import one from './../images/career/one.jpg'
import two from './../images/career/two.jpg'
import three from './../images/career/three.jpg'
import four from './../images/career/four.jpg'
import five from './../images/career/five.jpg'
import six from './../images/career/eight.jpg'
import seven from './../images/career/seven.jpg'
import eight from './../images/career/eight.jpg'
import nine from './../images/career/nine.jpg'
import ten from './../images/career/ten.jpg'
import '../styles/scss/component/image-masonry.css'

const settings = {
	dots: true,
    infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1000,
	centerPadding: "60px",
	slidesToShow: 5,
	speed: 400,
	rows: 2,
	slidesPerRow: 1
};

const Career = () => (
	<Layout>
		<SEO title="Career" />
		<section className='main-section career-wrapper mt-0 mt-lg-4'>
			<Container className="px-3 px-xl-2">
				<Row>
					<Col>
						<div className='top-wrap wrap px-2 px-lg-0'>
							<h1 className='page-heading font-weight-bold'>Careers at Ivision Web Studio</h1>
							<p className='description mb-3'>
								We are passionate about User Experience. If you too, this is the right place for you.
							</p>
						</div>  
					</Col>
				</Row>
			</Container>
			<div className="bg-color ">
				<Container className="content pt-80 px-3 px-xl-2">
					<Row>
						<Col>
							<div className=" px-2 px-lg-0 ">
								<h5 className="mb-3">Interested in joining us ?</h5>
								<p className="mb-0">
									At iVision Web Studio, we are constantly looking to expand our team of people. 
									If you feel you have what it takes to work in one of India's leading web development 
									companies then please send us your resume to <a href="mailto:contact@ivisionstudio.in"> contact@ivisionstudio.in </a>
								</p>
								<p>  
									Listed below are the current vacancies at the company, however if you 
									feel you have exceptional skills in any area of the web then we would be more 
									than happy to hear from you.
								</p>
							</div>
						</Col>
					</Row>
				</Container>

				<section className="photos strip-top">
					<div className="photos-grid">
						<div className="photos-grid-inner">
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={one} />	
								</div>
								<div className="photos-grid-item">
									<img src={two} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={three} />	
								</div>
								<div className="photos-grid-item">
									<img src={four} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={one} />	
								</div>
								<div className="photos-grid-item">
									<img src={two} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={five} />	
								</div>
								<div className="photos-grid-item">
									<img src={six} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={seven} />	
								</div>
								<div className="photos-grid-item">
									<img src={eight} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={four} />	
								</div>
								<div className="photos-grid-item">
									<img src={five} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={one} />	
								</div>
								<div className="photos-grid-item">
									<img src={two} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={seven} />	
								</div>
								<div className="photos-grid-item">
									<img src={eight} />	
								</div>		
							</div>
							<div className="photos-grid-column reverse">
								<div className="photos-grid-item">
									<img src={six} />	
								</div>
								<div className="photos-grid-item">
									<img src={seven} />	
								</div>		
							</div>
						</div>
					</div>
				</section>
				{/* <div className="career-slider-section">
					<div className="grid-image-gallery">
						<Slider {...settings}>
							<div className="image-wrapper">	
								<img src={one} />
							</div>
							<div className="image-wrapper">	
								<img src={two} />
							</div>
							<div className="image-wrapper">	
								<img src={three} />
							</div>
							<div className="image-wrapper">	
								<img src={four} />
							</div>
							<div className="image-wrapper">	
								<img src={five} />
							</div>
							<div className="image-wrapper">	
								<img src={six} />
							</div>
							<div className="image-wrapper">	
								<img src={seven} />
							</div>
							<div className="image-wrapper">	
								<img src={eight} />
							</div>
							<div className="image-wrapper">	
								<img src={nine} />
							</div>
							<div className="image-wrapper">	
								<img src={ten} />
							</div>
							<div className="image-wrapper">	
								<img src={ten} />
							</div>
							<div className="image-wrapper">	
								<img src={ten} />
							</div>
							
							
						</Slider>
					</div>
				</div> */}
				
				
				<Container className="px-3 px-xl-2">
				{/* <div>
					<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type 
					specimen book. It has survived not only five centuries, but also the leap into 
					electronic typesetting, remaining essentially unchanged. It was popularised in the 
					1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
					recently with desktop publishing software like Aldus PageMaker including versions of 
					Lorem Ipsum.
					</p>
				</div> */}
					<div className="job-overview-section pb-5 ">
						<h5 className="job-overview-title mb-3">Current openings</h5>
						<div className="job-overviews border-bottom ">
							<a href="/first-recruitment"className="job-title mb-0 text-decoration-none">
								PHP Developer with MVC Framework
							</a>
							<button className="button btn btn-primary">
								<a href="/first-recruitment" className="text-decoration-none">View More</a>  
							</button>
						</div>
						<div className="job-overviews border-bottom ">
							<a href="/second-recruitment"className="job-title mb-0 text-decoration-none">
								Front End Developer
							</a>
							<button className="button btn btn-primary">
								<a href="/second-recruitment" className="text-decoration-none">View More</a>  
							</button>
						</div>  
						{/* <p className="mt-4 text-center">
							Lorem Ipsum is simply dummy text of the printing ? 
							<a href="/contact" className="react-out-text text-decoration-none"> Reach out</a>
						</p> */}
					</div>
				</Container>
			</div>
			<div>
				<CareerFooter/>
			</div>
		</section>
	</Layout>
)

export default Career
