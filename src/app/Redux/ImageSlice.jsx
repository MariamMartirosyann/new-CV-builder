import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const {addImage } = imageSlice.actions;

export default imageSlice.reducer;
