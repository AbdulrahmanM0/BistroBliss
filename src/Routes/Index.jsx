import React from "react";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Menu from '../Pages/Menu'
import Contact from '../Pages/Contact'

const authProtectedRoutes = [
    //profile
    // { path: "/profile", component: UserProfile },
    ]

const publicRoutes = [
    { path: "/" , element: <Home />},
    { path: "/about", element: <About /> },
    { path: "/menu", element: <Menu /> },
    { path: "/contact", element: <Contact /> },
  ]


  export { authProtectedRoutes, publicRoutes }
