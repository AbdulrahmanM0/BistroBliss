import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <Link to="/" className="nav-link" activeclassname="active-link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  activeclassname="active-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="nav-link"
                  activeclassname="active-link"
                >
                  Menu
                </Link>
              </li>
              {/* <li><Link to='/'>Pages</Link></li>
              <li><Link to='/'>Contact</Link></li> */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
