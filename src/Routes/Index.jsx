import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import BookTable from "../Pages/BookTable";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ProfilePage from "../Pages/ProfilePage";

const authProtectedRoutes = [{ path: "/profile", element: <Profile /> }];

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/menu", element: <Menu /> },
  // { path: "/contact", element: <Contact /> },
  { path: "/booktable", element: <BookTable /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/Profle", element: <ProfilePage /> },
];

export { authProtectedRoutes, publicRoutes };
