// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers if you have additional slices
  },
});

export default store;
