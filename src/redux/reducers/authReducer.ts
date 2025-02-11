import { createSlice } from "@reduxjs/toolkit";

// Creating initial state
const initialState = {};

// Creating the slice
const authSlice = createSlice({ name: "auth", initialState, reducers: {} });

export default authSlice.reducer;
