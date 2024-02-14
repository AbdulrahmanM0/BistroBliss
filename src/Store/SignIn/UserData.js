import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SignInAction: (state) => {
      state.value = true
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
export const { SignInAction , LogOutAction} = UserSlice.actions

export default UserSlice.reducer