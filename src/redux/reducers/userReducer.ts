import { useSelector } from "react-redux";
import { doc, DocumentData, getDoc, setDoc } from "@firebase/firestore";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserState, RootState, ToggleItemPayload } from "@/lib/typesRedux";
import { db } from "@/utils/firebase";

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk<DocumentData | null, string>(
  "user/fetchUserData",
  async (uid, { rejectWithValue }) => {
    try {
      // Guard clause
      if (!uid) return null;

      // Get the actual user data
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      // Return user data
      if (docSnap.exists()) return docSnap.data();
      return null; // Return null otherwise
    } catch (error: unknown) {
      console.error(error);
      return rejectWithValue("An error occurred while fetching user data");
    }
  }
);

// Creating initial state
const initialState: IUserState = {
  uid: "",
  name: "",
  email: "",
  createdAt: "",
  title: "",
  gender: "N/A",
  birthday: "",
  likedMovies: [],
  likedShows: [],
  likedPeople: [],
  watchlistMovies: [],
  watchlistShows: [],
  isLoading: false,
  error: null,
};

// Creating the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Setting the user data
    setUserData(state, action) {
      return { ...state, ...action.payload, isLoading: false, error: null };
    },
    // Clear user data
    clearUserData() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.uid = action.payload.uid;
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.title = action.payload.title;
          state.gender = action.payload.gender;
          state.birthday = action.payload.birthday;
          state.createdAt = action.payload.createdAt;
          state.likedMovies = action.payload.likedMovies;
          state.likedShows = action.payload.likedShows;
          state.likedPeople = action.payload.likedPeople;
          state.watchlistMovies = action.payload.watchlistMovies;
          state.watchlistShows = action.payload.watchlistShows;
        } else {
          state.uid = "";
        }
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
        state.uid = "";
      });
  },
});

// Exporting everything out
export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;

// Custom hook for easier use
export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
