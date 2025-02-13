import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/redux/reducers/userReducer";

// Creating the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
