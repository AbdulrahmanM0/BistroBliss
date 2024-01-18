import React from 'react'
import { Button, Container } from 'reactstrap'
import logo from '../../../../assets/Images/Logo.png'
import Navbar from './Navbar'

export default function MainHeader() {
  return (
    <div className='main-header'>
        <Container>
            <header>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Button className='book-table-btn px-4 border-2 font-size-17 fw-bold' color='dark' outline  >Book A Table</Button>
                </div>
            </header>
        </Container>
    </div>
  )
}
