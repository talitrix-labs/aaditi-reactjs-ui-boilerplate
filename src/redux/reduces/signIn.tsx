import { createSlice } from '@reduxjs/toolkit'
import { _login } from '../actions/signIn'

const signinSlice = createSlice({
  name: 'user',
  initialState: { isloading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(_login.pending, (state, action) => (
        {
          ...state,
          isloading: true,
        }))
      .addCase(_login.fulfilled, (state, action) => (
        {
          ...state,
          isloading: false,
          ...action.payload,
        }))
      .addCase(_login.rejected, (state, action) => (
        {
          ...state,
          isloading: false,
          ...action.error,
        }))
  },
})

export default signinSlice.reducer