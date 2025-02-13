import store from "@/redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Auth slice
export interface IAuthState {
  user: {
    uid: string | null;
    email: string | null;
  };
  isAuthenticated: boolean;
}

// User slice
export interface IUserState {
  name: string;
  email: string;
  createdAt: Date;
  title: string;
  likedMovies: string[];
  likedShows: string[];
  likedPeople: string[];
  watchListMovies: string[];
  watchListShows: string[];
}
