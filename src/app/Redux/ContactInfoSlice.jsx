import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
};

const contactSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    addContactInfo: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { addContactInfo } = contactSlice.actions;

export default contactSlice.reducer;
