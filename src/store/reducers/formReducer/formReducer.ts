import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  fname: string;
  lname: string;
  email: string;
}

const initialState: FormData = {
  fname: "",
  lname: "",
  email: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
