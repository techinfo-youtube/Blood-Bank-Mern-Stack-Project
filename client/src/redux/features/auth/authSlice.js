import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice;
