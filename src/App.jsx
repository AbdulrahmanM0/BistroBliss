import React from 'react'
import Header from './Components/Layout/Header/Header'
import Home from './Pages/Home'
// import Authmiddleware from './Routes/Routes'
// import { authProtectedRoutes, publicRoutes } from './Routes/Index'

function App() {

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
    </>
  )
}

export default App
