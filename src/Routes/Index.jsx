import React from "react";
// import { Redirect } from "react-router-dom"

// Home page
import Home from "../Pages/Home";
import About from "../Pages/About"

const authProtectedRoutes = [
    //profile
    // { path: "/profile", component: UserProfile },
]
const publicRoutes = [
    { path: "/" , component: Home},
    { path: "/about", component: About },
    // { path: "/", exact: true, component: () => <Redirect to="/Home" /> },

  ]

  export { authProtectedRoutes, publicRoutes }
