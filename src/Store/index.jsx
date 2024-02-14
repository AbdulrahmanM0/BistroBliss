import { configureStore } from '@reduxjs/toolkit';
import  SignIn  from './SignIn/signInSlice';


const store = configureStore({
    reducer: {
      SignIn,
    },
  });
  
  export default store;