import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

import { IAuthState, RootState } from "@/lib/typesRedux";

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
    signInUser(state, action) {
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
      };
      state.isAuthenticated = true;
    },
    // Creating new account
    signUpUser(state, action) {
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
      };
      state.isAuthenticated = true;
    },
    // Logging out
    signOutUser(state) {
      state.user = { uid: null, email: null };
      state.isAuthenticated = false;
    },
  },
});

// Exporting everything out
export const { signInUser, signUpUser, signOutUser } = authSlice.actions;
export default authSlice.reducer;

// Custom hook for easier use
export const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return { user, isAuthenticated };
};
