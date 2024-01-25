import React from 'react'
import { Container } from 'reactstrap'
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

export default function SocialBar() {
  return (
        <div className='socialBar p-2'>
          <Container>
              <div className='social-container'>
                <ul className='font-size-13 d-flex'>
                  <li> <div><i className="bi bi-telephone me-1"></i>  (414) 857 - 0107 </div></li>
                  <li> <div className='m-3'></div></li>
                  <li> <div><i className="bi bi-envelope me-1"></i>  yummy@bistrobliss </div></li>
                </ul>
                <ul className='d-flex social-icons'>
                  <li><a href='#'><div><i className="bi bi-twitter-x"></i></div></a></li>
                  <li><a href='#'><div><i className="bi bi-instagram"></i></div></a></li>
                  <li><a href='#'><div><i className="bi bi-github"></i></div></a></li>
                  <li><a href='#'><div><i className="bi bi-facebook"></i></div></a></li>
                </ul>
              </div>
          </Container>
        </div>
  )
}
