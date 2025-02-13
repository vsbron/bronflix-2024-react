import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

import { IUserState, RootState } from "@/lib/typesRedux";

// Creating initial state
const initialState: IUserState = {
  uid: "",
  name: "",
  email: "",
  createdAt: new Date(),
  title: "",
  likedMovies: [],
  likedShows: [],
  likedPeople: [],
  watchListMovies: [],
  watchListShows: [],
};

// Creating the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Setting the user data
    setUserData(state, action) {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.createdAt = action.payload.createdAt;
      state.title = action.payload.title;
      state.likedMovies = action.payload.likedMovies;
      state.likedShows = action.payload.likedShows;
      state.likedPeople = action.payload.likedPeople;
      state.watchListMovies = action.payload.watchListMovies;
      state.watchListShows = action.payload.watchListShows;
    },
    reducer2(state, action) {},
    // Clear user data
    clearUserData(state) {
      state.uid = "";
      state.name = "";
      state.email = "";
      state.createdAt = new Date();
      state.title = "";
      state.likedMovies = [];
      state.likedShows = [];
      state.likedPeople = [];
      state.watchListMovies = [];
      state.watchListShows = [];
    },
  },
});

// Exporting everything out
export const { setUserData, reducer2, clearUserData } = userSlice.actions;
export default userSlice.reducer;

// Custom hook for easier use
export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
