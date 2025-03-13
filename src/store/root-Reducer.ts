import { combineReducers } from "@reduxjs/toolkit";

/*=========== REDUCERS =============*/
import { formReducer } from "./formReducer/formReducer.ts";

export const rootReducer = combineReducers({
  form: formReducer,
});
