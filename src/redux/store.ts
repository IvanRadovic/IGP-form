import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-Reducer.ts";

export const store = configureStore({
  reducer: rootReducer,
});
