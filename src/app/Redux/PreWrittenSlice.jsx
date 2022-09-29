import { createSlice } from "@reduxjs/toolkit";

export const preWrittenText = [
  { id: 2, skills: "Teamwork" },
  { id: 3, skills: "Problem-Solving" },
  { id: 4, skills: "Customer-Service" },
  { id: 5, skills: "Sales" },
  { id: 6, skills: "Leadership" },
  { id: 7, skills: "Public-Speaking" },
  { id: 8, skills: "Handling-Conflict" },
  { id: 9, skills: "Mentoring" },
  { id: 10, skills: "Office-administration" },
  { id: 11, skills: "Social-Media" },
];
export const preWrittenTextObjective = [
  {
    id: 1,
    index:11,
    objective:
      "Experienced specialist with a passion for delivering outstanding service",
  },
  {
    id: 2,
    index:22,
    objective:
      "Proactive, customer-orientated professional with over 4 years of experience in reputable shops.",
  },
  {
    id: 3,
    index:33,
    objective:
      "Self-motivated, team player with strong organizational and interpersonal skills.",
  },
  {
    id: 4,
    index:44,
    objective:
      "Have a proven record of surpassing sales targets and boosting revenue.",
  },
  {
    id: 5,
    index:55,
    objective:
      "Always looking to learn new skills, take on extra responsibilities, and grow professionally.",
  },
  {
    id: 6,
    index:66,
    objective: "Experienced in training and mentoring new members of staff.",
  },
  {
    id: 7,
    index:77,
    objective:
      "Confident public speaker with experience of giving presentations and training sessions.",
  },
  {
    id: 8,
    index:88,
    objective:
      "Received 3 'Employee of the Month’ awards' for delivering outstanding service.",
  },
  {
    id: 9,
    index:99,
    objective:
      "Have worked in busy, pressurized environments where high standards are expected.",
  },
  {
    id: 10,
    index:100,
    objective:
      "My dedication and passion has been recognized with awards, praise, and extra responsibilities.",
  },
];

const initialState = {
  list: preWrittenText,
  list1: preWrittenTextObjective ,
  showPreWrittenText: false,
  showDownloadDiv:false,
};

const preWrittenSlice = createSlice({
  name: "preWrittenInfo",
  initialState,
  reducers: {
    preWrittenTextState: (state,  payload ) => {
      state.showPreWrittenText = payload;
    },
    showDownloadDiv: (state, { payload }) => {
      state.showDownloadDiv = payload;
    },
  },
});
export const { addPreWritten, deletePreWritten, preWrittenTextState, showDownloadDiv} =
  preWrittenSlice.actions;

export default preWrittenSlice.reducer;
