import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

import { IUserState, RootState } from "@/lib/typesRedux";

// Creating initial state
const initialState: IUserState = {
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
    reducer3(state, action) {},
  },
});

// Exporting everything out
export const { setUserData, reducer2, reducer3 } = userSlice.actions;
export default userSlice.reducer;

// Custom hook for easier use
export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
