import { createSlice } from "@reduxjs/toolkit";

import { IAuthState, RootState } from "@/lib/typesRedux";
import { useSelector } from "react-redux";

// Creating initial state
const initialState: IAuthState = {
  user: {
    uid: null,
    name: null,
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
      state.user = {
        uid: action.payload.uid,
        name: "John",
        email: action.payload.email,
      };
      state.isAuthenticated = true;
    },
    // Creating new account
    signUp(state, action) {
      state.user = {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isAuthenticated = true;
    },
    // Logging out
    signOut(state) {
      state.user = { uid: null, name: null, email: null };
      state.isAuthenticated = false;
    },
  },
});

// Exporting everything out
export const { signIn, signUp, signOut } = authSlice.actions;
export default authSlice.reducer;

// Custom hook for easier use
export const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return { user, isAuthenticated };
};
