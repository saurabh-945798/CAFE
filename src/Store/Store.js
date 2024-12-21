// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Ensure correct path to cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
