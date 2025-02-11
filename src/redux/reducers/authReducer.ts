import { createSlice } from "@reduxjs/toolkit";

import { IAuthState } from "@/lib/typesRedux";

// Creating initial state
const initialState: IAuthState = {
  user: {
    uid: null,
    email: null,
  },
  isAuthenticated: false,
};

// Creating the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Logging in
    signIn(state, action) {
      state.user = { uid: action.payload.uid, email: action.payload.email };
      state.isAuthenticated = true;
    },
    // Creating new account
    signUp(state, action) {
      state.user = { uid: action.payload.uid, email: action.payload.email };
      state.isAuthenticated = true;
    },
    // Logging out
    signOut(state) {
      state.user = { uid: null, email: null };
      state.isAuthenticated = false;
    },
  },
});

// Exporting everything out
export const { signIn, signUp, signOut } = authSlice.actions;
export default authSlice.reducer;
