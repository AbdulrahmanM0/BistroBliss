import React from 'react'
import PlayImg from '../../../../assets/Images/about-page/Play.png'

export default function VideoSection() {
  return (
    <section className='video-section'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <img src={PlayImg} className='mb-4'/>
                <h1 className='text-light'>Feel the authentic & <br/> original taste from us</h1>
            </div>
        </div>
    </section>
  )
}
