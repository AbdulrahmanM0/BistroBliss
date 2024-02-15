import { configureStore } from '@reduxjs/toolkit';
import  SignIn  from './SignIn/signInSlice';
import Menu from './Menu/Menu';


const store = configureStore({
    reducer: {
      SignIn,
      Menu,
    },
  });
  
  export default store;