import store from "@/redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// User slice
export interface IUserState {
  uid: string;
  name: string;
  email: string;
  createdAt: string;
  title: string;
  likedMovies: string[];
  likedShows: string[];
  likedPeople: string[];
  watchListMovies: string[];
  watchListShows: string[];
  isLoading: boolean;
  error: string | null;
}
