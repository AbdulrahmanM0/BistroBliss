import React, { useEffect } from 'react'
import Header from './Components/Layout/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/Layout/Footer/Footer'
import AOS from 'aos';

// import Authmiddleware from './Routes/Routes'
// import { authProtectedRoutes, publicRoutes } from './Routes/Index'

function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      {/* <Router>
        <Switch> */}
        {/* {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))} */}

          {/* {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))} */}
        {/* </Switch>
      </Router> */}
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
