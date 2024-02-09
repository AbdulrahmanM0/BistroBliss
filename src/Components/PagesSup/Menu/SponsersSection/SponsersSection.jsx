import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Sponser1 from '../../../../assets/Images/menu/Sponsers/1.png'
import Sponser2 from '../../../../assets/Images/menu/Sponsers/2.png'
import Sponser3 from '../../../../assets/Images/menu/Sponsers/3.png'
import Sponser4 from '../../../../assets/Images/menu/Sponsers/1 (1).png'
import Sponser5 from '../../../../assets/Images/menu/Sponsers/2 (1).png'
import Sponser6 from '../../../../assets/Images/menu/Sponsers/3 (1).png'
import Sponser7 from '../../../../assets/Images/menu/Sponsers/1 (2).png'
import Sponser8 from '../../../../assets/Images/menu/Sponsers/2 (2).png'
import Sponser9 from '../../../../assets/Images/menu/Sponsers/3 (2).png'

export default function SponsersSection() {
    const Sponsers = [Sponser1,Sponser2,Sponser3,Sponser4,Sponser5,Sponser6,Sponser7,Sponser8,Sponser9]
    
  return (
    <section className='sponsers-section'>
        <div className='section'>
            <Container>
                <Row>
                    <Col lg={4} md={5} sm={12}>
                        <div className='content details' data-aos="fade-up" data-aos-duration="2000">
                            <div>
                                <h1>You can order through apps</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={7} sm={12}>
                        <div className='d-flex'>
                            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                                {Sponsers.map((item,key)=>
                                <div key={key} sm={4}>
                                    <div data-aos="fade-right" data-aos-duration="2000" className='sponser-card'>
                                        <img src={item} alt={`Sponser${key}`}/>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}
