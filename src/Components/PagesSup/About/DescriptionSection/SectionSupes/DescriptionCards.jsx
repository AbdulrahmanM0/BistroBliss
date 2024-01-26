import React from 'react'
import { Col } from 'reactstrap'

export default function DescriptionCards({cardImg , cardBody , cardTitle}) {
  return (
    <Col sm={12} md={6} lg={4}>
        <div className='card-container'>
            <div>
                {cardImg}
            </div>
            <div>
                {cardTitle} {cardBody}
            </div>
        </div>
    </Col>
  )
}
