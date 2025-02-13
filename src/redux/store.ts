import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/redux/reducers/authReducer";
import userReducer from "@/redux/reducers/userReducer";

// Creating the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
