import React, { useEffect } from 'react'
import Header from './Components/Layout/Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import BookTable from './Pages/BookTable'
import Contact from './Pages/Contact'
import Footer from './Components/Layout/Footer/Footer'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import AOS from 'aos';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes , authProtectedRoutes} from './Routes/Index'

function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      <Header />
        <Routes>
          {publicRoutes.map(item => 
            <Route path={item.path} element={item.element} />
            )}
          {authProtectedRoutes.map(item => 
            <Route path={item.path} element={item.element} />
            )}
        </Routes>
      <Footer />
    </>
  )
}

export default App
