import React from 'react'
import SectionHead from '../../../../Common/SectionHead'
import { Col, Container, Row } from 'reactstrap'
import Card from './SectionSups/Card'

export default function BrowsSection() {

    const cardData = [
        {
            cardIcon: <i className="bi bi-cup-hot"></i>,
            cardTitle: 'Breakfast',
            cardBody: 'In the new era of technology we look in the future with certainty and pride for our life.',
            cardLink: 'Explore Menu', 
        },
        {
            cardIcon:  <i className="bi bi-egg-fried"></i>,
            cardTitle: 'Main Dishes',
            cardBody: 'In the new era of technology we look in the future with certainty and pride for our life.',
            cardLink: 'Explore Menu', 
        },
        {
            cardIcon: <i className="bi bi-cup-straw"></i>,
            cardTitle: 'Drinks',
            cardBody: 'In the new era of technology we look in the future with certainty and pride for our life.',
            cardLink: 'Explore Menu', 
        },
        {
            cardIcon: <i className="bi bi-cake2"></i>,
            cardTitle: 'Desserts',
            cardBody: 'In the new era of technology we look in the future with certainty and pride for our life.',
            cardLink: 'Explore Menu', 
        },
    ]
  return (
    <section className='brows-section'>
        <div className='section'>
            <Container>
                <div >
                    <SectionHead title={'Browse Our Menu'}/>
                </div>
                <div className='p-5' data-aos="fade-right"  data-aos-duration="3000">
                    <Row className='justify-content-center'>
                    {
                        cardData.map((card,key) => (
                            <Col key={key} sm={8} md={6} lg={3}>
                                <Card cardIcon={card.cardIcon} cardTitle={card.cardTitle} cardBody={card.cardBody} cardLink={card.cardLink}/>
                            </Col>
                        ))
                    }
                    </Row>
                </div>
            </Container>
        </div>
    </section>
  )
}
