import React from 'react'
import { Button } from 'reactstrap'

export default function MainSection() {
  return (
    <section className='main-section'>
        <div className='main-section-container'>
            <div 
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h1>Best food for <br/>your taste</h1>
                <p>Discover delectable cuisine and unforgettable moments <br/> in our welcoming, culinary haven.</p>
                <div>
                    <Button>Book A Table</Button>
                    <Button className='border-3' color='dark' outline>Explore Menu</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
