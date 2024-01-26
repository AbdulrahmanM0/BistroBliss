import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState();

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      {windowWidth > 1000 && (
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
              {/* <li><NavLink to='/'>Pages</NavLink></li>
              <li><NavLink to='/'>Contact</NavLink></li> */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
