import React from 'react'
import { Container, Row } from 'reactstrap'
import cardImage1 from '../../../../assets/Images/about-page/DescriptionCards/Group.png'
import cardImage2 from '../../../../assets/Images/about-page/DescriptionCards/Group (1).png'
import cardImage3 from '../../../../assets/Images/about-page/DescriptionCards/Group (2).png'
import DescriptionCards from './SectionSupes/DescriptionCards'

export default function DescriptionSection() {

    const dataCards = [
        {
            icon: <img src={cardImage1} />,
            title: <h4>Multi Cuisine</h4>,
            body: <p>In the new era of technology we look in the future with certainty life.</p>,
        },
        {
            icon: <img src={cardImage2} />,
            title: <h4>Easy To Order</h4>,
            body: <p>In the new era of technology we look in the future with certainty life.</p>,
        },
        {
            icon: <img src={cardImage3} />,
            title: <h4>Fast Delivery</h4>,
            body: <p>In the new era of technology we look in the future with certainty life.</p>,
        },
    ]
  return (
    <section className='description-section'>
        <div className='section'>
            <Container>
                <div>
                    <Row className='justify-content-center'>
                        {dataCards.map((item,index) => (
                            <DescriptionCards cardImg={item.icon} cardTitle={item.title} cardBody={item.body}/>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    </section>
  )
}
