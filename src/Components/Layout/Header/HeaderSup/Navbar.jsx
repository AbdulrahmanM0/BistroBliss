import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";
import { useSelector } from "react-redux";

export default function Navbar({windowWidth}) {
  const state = useSelector(state => state.SignIn.value)
  console.log(state)


  return (
    <>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="nav-link" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={state?"/booktable":"/signin"}
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Reservation
                </NavLink>
              </li>
              <li>
                <Auth windowWidth={windowWidth}/>
              </li>
              
            </ul>
          </nav>
        </div>
    </>
  );
}
