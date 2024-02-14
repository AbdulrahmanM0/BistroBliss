import React, { useEffect } from "react";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import AOS from "aos";
import { redirect, useNavigate } from "react-router-dom";

import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import { publicRoutes, authProtectedRoutes } from "./Routes/Index";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state.SignIn.value)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(()=>{
    const loader = async () => {
      if (!state) {
        return navigate("/");
      }
    };
    loader()
  },[state])

  return (
    <>
    {location.pathname === "/signin" || location.pathname === "/SignUp" ? "" :
      <Header/>
    }
      <Routes>
        {publicRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        {authProtectedRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
      {location.pathname === "/SignUp" || location.pathname === "/signin" ? "" :
        <Footer />
      }
    </>
  );
}

export default App;
