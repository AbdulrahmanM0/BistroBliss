import React from 'react'
import Logo from '../../../../../assets/Images/Footer/Logo.png'
import Social from './Social'

export default function Slice1() {
  return (
    <div className='slice1'>
        <div className='logo'> 
          <img src={Logo} />
        </div>
        <div className='paragraph-footer'>
            <p>
                In the new era of technology we look a in the future with certainty and pride to for our company and.
            </p>
        </div>
        <div className='social-icons-footer'>
            <Social />
        </div>
    </div>
  )
}
