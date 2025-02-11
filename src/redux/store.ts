import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/redux/reducers/authReducer";

// Creating the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
