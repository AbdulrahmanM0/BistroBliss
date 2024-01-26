import React, { useEffect } from 'react'
import Header from './Components/Layout/Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Footer from './Components/Layout/Footer/Footer'
import AOS from 'aos';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookTable from './Pages/BookTable'

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
          <Route path='/menu' element={<Menu />} />
          <Route path='/booktable' element={<BookTable />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
