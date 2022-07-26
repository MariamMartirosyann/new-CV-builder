import { createSlice } from "@reduxjs/toolkit";

export const preWrittenText = [
  { id: 1, skills: "NLP" },
  { id: 2, skills: "Teamwork" },
  { id: 3, skills: "Problem-Solving" },
  { id: 4, skills: "Customer-Service" },
  { id: 5, skills: "Sales" },
  { id: 6, skills: "Leadership" },
  { id: 7,skills: "Public-Speaking" },
  { id: 8, skills: "Handling-Conflict" },
  { id: 9, skills: "Mentoring" },
  { id: 10, skills: "Office-administration" },
  { id: 11,skills: "Social-Media" },
];

const initialState = {
  list: preWrittenText,
};

const preWrittenSlice = createSlice({
  name: "preWrittenInfo",
  initialState,
  reducers: {
    addPreWritten: (state, action) => {
      const newItem = {
        id: action.payload.id,
        skills: action.payload.skills,
      };
      const newList = [...state.list, newItem];
      state.list = newList;
    },
    deletePreWritten: (state, { payload }) => {
      state.list = [...state.list.filter((item) => item.id !== payload.id)];
    },
  },
});
export const {  addPreWritten, deletePreWritten } = preWrittenSlice.actions;

export default preWrittenSlice.reducer;
