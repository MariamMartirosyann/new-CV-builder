import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const jobsSlice = createSlice({
  name: "jobsInfo",
  initialState,
  reducers: {
    addJobsInfo: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { addJobsInfo } = jobsSlice.actions;

export default jobsSlice.reducer;
