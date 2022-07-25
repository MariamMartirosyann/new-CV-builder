import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const skillsSlice = createSlice({
  name: "skillsInfo",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      const newItem = {
        id: action.payload.id,
        skills: action.payload.skills,
      };
      const newList = [...state.list, newItem];
      state.list = newList;
    },
    deleteSkills: (state, { payload }) => {
      state.list = [...state.list.filter((item) => item.id !== payload.id)];
    },
  },
});
export const { addSkills, deleteSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
