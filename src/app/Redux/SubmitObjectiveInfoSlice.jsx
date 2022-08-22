import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  submitList:null,
};

const submitObjectiveSlice = createSlice({
  name: "submitObjectiveInfo",
  initialState,
  reducers: {
   
    submitObjectiveInfo: (state, { payload }) => {
      state.submitList = payload;
    }
  },
});

export const { submitObjectiveInfo } =
submitObjectiveSlice.actions;

export default submitObjectiveSlice.reducer;
