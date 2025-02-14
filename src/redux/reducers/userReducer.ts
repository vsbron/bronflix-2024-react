import { useSelector } from "react-redux";
import { doc, DocumentData, getDoc } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IUserState, RootState } from "@/lib/typesRedux";
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
  createdAt: new Date(),
  title: "",
  likedMovies: [],
  likedShows: [],
  likedPeople: [],
  watchListMovies: [],
  watchListShows: [],
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
