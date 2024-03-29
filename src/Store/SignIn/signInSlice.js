import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  username: ''
}

export const signInSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SignInAction: (state , action) => {
      state.value = true;
      state.username = action.payload;
    },
    LogOutAction: (state) => {
        state.value = false
    }
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { SignInAction , LogOutAction} = signInSlice.actions

export default signInSlice.reducer