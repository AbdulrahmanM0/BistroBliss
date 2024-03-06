import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import logo from '../../../../assets/Images/Logo.png';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import Auth from './Auth';
import SideBar from '../../SideBar/SideBar'

export default function MainHeader({windowWidth}) {

  return (
    <div className='main-header'>
      <Container>
        <header>
          <div className='logo'>
            <Link to="/">
              <img src={logo} alt='logo' />
            </Link>
          </div>
          {windowWidth > 1000 ? (
          <div>
            <Navbar windowWidth={windowWidth}/>
          </div>
          ):
          <div>
            <SideBar windowWidth={windowWidth}/>
          </div>
          }
        </header>
      </Container>
    </div>
  );
}
