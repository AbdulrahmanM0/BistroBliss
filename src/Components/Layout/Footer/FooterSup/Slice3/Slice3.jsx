import React from 'react'
import image1 from '../../../../../assets/Images/Footer/pexels-steve-3789885 1.png'
import image2 from '../../../../../assets/Images/Footer/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png'
import image3 from '../../../../../assets/Images/Footer/pexels-ella-olsson-1640772 1.png'
import image4 from '../../../../../assets/Images/Footer/pexels-steve-3789885 1.png'

export default function Slice3() {
  return (
    <div className='slice3'>
        <h6>Follow us on Instgram</h6>
        <div className='image-container'>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
        </div>
    </div>
  )
}
