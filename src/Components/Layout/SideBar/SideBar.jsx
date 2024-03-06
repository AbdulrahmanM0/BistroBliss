import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Auth from '../Header/HeaderSup/Auth';
import { LogOutAction } from '../../../Store/SignIn/signInSlice';
import { useDispatch, useSelector } from 'react-redux';

window.onclick = e => console.log(e.target)

export default function TemporaryDrawer({windowWidth}) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const stateUser = useSelector(state => state.SignIn.value)
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <div className='m-auto mt-5 mb-5 text-center'>
            <Auth windowWidth={windowWidth}/>
          </div>


          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/")}>
              <ListItemIcon>
                <HomeIcon /> 
              </ListItemIcon>
                <NavLink to="/" className="nav-link" activeClassName="active-link">
                  Home
                </NavLink>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/about")}>
              <ListItemIcon>
                <SettingsAccessibilityIcon />
              </ListItemIcon>
              <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  About
                </NavLink>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/menu")}>
              <ListItemIcon>
                <RestaurantMenuIcon /> 
              </ListItemIcon>
              <NavLink
                  to="/menu"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Menu
                </NavLink>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/booktable")}>
              <ListItemIcon>
                <EventSeatIcon /> 
              </ListItemIcon>
              <NavLink
                  to="/booktable"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Reservation
                </NavLink>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

          {stateUser &&
          <ListItem disablePadding>
            <ListItemButton onClick={async()=>{await dispatch(LogOutAction()); navigate("/")}}>
              <ListItemIcon>
                <LogoutIcon /> 
              </ListItemIcon>
              <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Logout
                </NavLink>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
        }

      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment >
          <Button onClick={toggleDrawer('right', true)}><i className="bi bi-list font-size-20 text-dark"></i></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
