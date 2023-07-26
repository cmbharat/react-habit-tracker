import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../src/reducers";

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
