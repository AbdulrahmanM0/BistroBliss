import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import VisitsImage from '../../../../assets/Images/home-page/VisitSection.png'

export default function VisitUsSection() {
  return (
    <section className='visitus-section'>
        <div className='section'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <div className='content' data-aos="fade-right" data-aos-duration="2000">
                            <img src={VisitsImage} />
                            <div className='contact-container rounded' data-aos="fade-down-right" data-aos-duration="3000">
                                <h5>Come and visit us</h5>
                                <ul>
                                    <li><a><i className="bi bi-telephone"></i> <div>(414) 857 - 0107</div></a></li>
                                    <li><a><i className="bi bi-envelope"></i> <div>happytummy@restaurant.com</div></a></li>
                                    <li><a><i className="bi bi-geo-alt"></i> <div>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</div></a></li>
                                </ul>
                            </div>
                    </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='content details' data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <h1>We provide healthy food for your family.</h1>
                            <p className='fw-bold'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                            <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>
                        <div>
                            <Button className='border-3 custom-button' color='dark' outline>More About Us</Button>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}
