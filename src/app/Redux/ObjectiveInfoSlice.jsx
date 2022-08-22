import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const objectiveSlice = createSlice({
  name: "objectiveInfo",
  initialState,
  reducers: {
    addObjectiveInfo: (state, { payload }) => {
      const updatedList = [...state.list, payload];
      state.list = updatedList;
    },
   
    deleteObjectiveInfo: (state, { payload }) => {
      state.list = [...state.list.filter((item) => item.id !== payload.id)];
    },
  },
});

export const { addObjectiveInfo, deleteObjectiveInfo } =
  objectiveSlice.actions;

export default objectiveSlice.reducer;
