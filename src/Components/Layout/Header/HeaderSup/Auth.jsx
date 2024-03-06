import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserComponent from "./UserComponent";

export default function Auth({windowWidth}) {
  const navigate = useNavigate();
  const state = useSelector(state => state.SignIn)
  console.log(windowWidth)



  return (
    <div>
      {
        state.value ?
        <>
        {windowWidth > 1000 ?
          <div>
            <UserComponent state={state}/>
          </div>
          :
          <div className='text-dark fw-bold pointer' onClick={()=>navigate('/Profle')}>
            {state.username.toUpperCase()}
          </div>
        }
        </>
      :
      <>
      <Button
      variant="outlined"
      onClick={() => navigate("/signin")}
      color="error"
      >
      Login
      </Button>
      <Button
      variant="contained"
      onClick={() => navigate("/SignUp")}
      color="error"
      >
      Sign-up
      </Button>
      </>

      }
    </div>
  );
}
