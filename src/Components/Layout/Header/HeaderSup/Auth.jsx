import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function Auth() {
    const navigate = useNavigate()
    console.log(navigate)
  return (
    <div>
        <Button variant="outlined" onClick={()=>navigate('/login')} color="error">Login</Button>
        <Button variant="contained" onClick={()=>navigate('/signup')} color="error">Sign-up</Button>
    </div>
  )
}
