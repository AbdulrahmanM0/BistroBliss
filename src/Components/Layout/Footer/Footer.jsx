import React from 'react'
import { Container } from 'reactstrap'
import Slice1 from './FooterSup/Slice1/Slice1'
import Slice2 from './FooterSup/Slice2/Slice2'
import Slice3 from './FooterSup/Slice3/Slice3'
import CopyRight from './FooterSup/CopyRight/CopyRight'

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <Container>
          <div className='footer-container'>
            <Slice1 />
            <Slice2 />
            <Slice3 />
          </div>
        </Container>
        <div>
            <CopyRight />
          </div>
      </footer>
    </div>
  )
}
