import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'All',
}

export const menuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    MenuInAction: (state , action) => {
      state.type = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { MenuInAction } = menuSlice.actions

export default menuSlice.reducer