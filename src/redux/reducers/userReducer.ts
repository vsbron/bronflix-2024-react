import { useSelector } from "react-redux";
import { doc, DocumentData, getDoc } from "@firebase/firestore";
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
    // Add media to the user list
    toggleItemInList(state, action: PayloadAction<ToggleItemPayload>) {
      const { listKey, id } = action.payload;

      // Explicitly assert that state[listKey] is an array
      const list = state[listKey] as number[];

      // Check if media already in the list and then add/remove it
      const exists = list.includes(id);
      state[listKey] = exists
        ? list.filter((itemId) => itemId !== id)
        : [...list, id];
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
          state.likedPeople = action.payload.likedPeople;
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
export const { setUserData, clearUserData, toggleItemInList } =
  userSlice.actions;
export default userSlice.reducer;

// Custom hook for easier use
export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
