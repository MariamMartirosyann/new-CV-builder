import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  submitList:null,
};

const objectiveSlice = createSlice({
  name: "objectiveInfo",
  initialState,
  reducers: {
    addObjectiveInfo: (state, { payload }) => {
      state.list = payload;
    },
    submitObjectiveInfo: (state, { payload }) => {
      state.submitList = payload;
    },
    deleteObjectiveInfo:(state, { payload }) => {
      state.list = [...state.list.filter((item) => item.id !== payload.id)];
    },
   
  },

});

export const { addObjectiveInfo, submitObjectiveInfo,deleteObjectiveInfo } = objectiveSlice.actions;

export default objectiveSlice.reducer;
