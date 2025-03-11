// src/redux/reducers/jsonDataReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputsDataState {
  data: any;
}

const initialState: inputsDataState = {
  data: null,
};

const inputDataSlice = createSlice({
  name: "jsonData",
  initialState,
  reducers: {
    setInputsData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setInputsData } = inputDataSlice.actions;
export const inputReducer = inputDataSlice.reducer;
