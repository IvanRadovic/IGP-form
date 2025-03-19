import { combineReducers } from "@reduxjs/toolkit";

/*=========== REDUCERS =============*/
import { formReducer } from "./formReducer/formReducer.ts";
import { gamesReducer } from "./games/gamesReducer.ts";

export const rootReducer = combineReducers({
  form: formReducer,
  games: gamesReducer,
});
