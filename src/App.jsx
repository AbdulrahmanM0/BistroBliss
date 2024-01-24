import React, { useEffect } from 'react'
import Header from './Components/Layout/Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Layout/Footer/Footer'
import AOS from 'aos';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
