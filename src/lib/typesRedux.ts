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
