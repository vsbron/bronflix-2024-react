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
  birthday: string;
  likedMovies: IBase[];
  likedShows: IBase[];
  likedPeople: IBase[];
  watchlistMovies: IBase[];
  watchlistShows: IBase[];
  isLoading: boolean;
  error: string | null;
}

// Reducers
type ListKey =
  | "likedMovies"
  | "likedShows"
  | "likedPeople"
  | "watchlistMovies"
  | "watchlistShows";

export interface ToggleItemPayload {
  listKey: ListKey;
  id: number;
}
