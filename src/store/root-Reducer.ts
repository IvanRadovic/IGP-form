import { combineReducers } from "@reduxjs/toolkit";

/*=========== REDUCERS =============*/
import { formReducer } from "./reducers/formReducer/formReducer.ts";
import { gamesReducer } from "./reducers/gamesReducer/gamesReducer.ts";

export const rootReducer = combineReducers({
  form: formReducer,
  games: gamesReducer,
});
