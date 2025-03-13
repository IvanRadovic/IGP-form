import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  email: string;
  password: string;
  address: string;
}

const initialState: FormData = {
  email: "",
  password: "",
  address: "",
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
