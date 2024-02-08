import React, { useEffect } from 'react';
import { Button, Container } from 'reactstrap';
import logo from '../../../../assets/Images/Logo.png';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import Auth from './Auth';

export default function MainHeader() {
  const navigate = useNavigate();


  return (
    <div className='main-header'>
      <Container>
        <header>
          <div className='logo'>
            <Link to="/">
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div>
            <Navbar />
          </div>
          <div>
            {/* <Button
              onClick={()=> navigate('/booktable')}
              className='book-table-btn px-4 border-2 font-size-17 fw-bold'
              color='dark'
              outline
            >
              Book A Table
            </Button> */}
            <Auth />
          </div>
        </header>
      </Container>
    </div>
  );
}
