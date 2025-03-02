import { IGradedList } from "@/lib/types";
import { IBase } from "@/lib/typesAPI";
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
  gender: string;
  birthday: string | number;
  likedMovies: IBase[];
  likedShows: IBase[];
  likedPeople: IBase[];
  watchlistMovies: IBase[];
  watchlistShows: IBase[];
  gradedMovies: IGradedList[];
  avatar: string;
  isLoading: boolean;
  error: string | null;
}
