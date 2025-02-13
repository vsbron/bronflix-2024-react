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
    reducer1(state, action) {},
    reducer2(state, action) {},
    reducer3(state, action) {},
  },
});

// Exporting everything out
export const { reducer1, reducer2, reducer3 } = userSlice.actions;
export default userSlice.reducer;

// Custom hook for easier use
export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
