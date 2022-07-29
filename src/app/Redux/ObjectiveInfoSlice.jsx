import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
};

const objectiveSlice = createSlice({
  name: "objectiveInfo",
  initialState,
  reducers: {
    addObjectiveInfo: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { addObjectiveInfo } = objectiveSlice.actions;

export default objectiveSlice.reducer;
