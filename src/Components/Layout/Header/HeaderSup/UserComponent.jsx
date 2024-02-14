import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOutAction } from '../../../../Store/SignIn/signInSlice';

export default function UserComponent({state}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-dark fw-bold'
      >
        {state.username}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>{handleClose ; navigate('/Profle')}}>My account</MenuItem>
        <MenuItem onClick={async ()=> {handleClose ; await dispatch(LogOutAction()); navigate("/")}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}