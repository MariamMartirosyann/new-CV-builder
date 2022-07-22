import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const jobsSlice = createSlice({
  name: "jobsInfo",
  initialState,
  reducers: {
    addJobsInfo: (state, action) => {
      const newItem = {
        id:action.payload.id,
        position: action.payload.position,
        location:action.payload.location,
        company: action.payload.company,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
      const newList = [...state.list, newItem];
      state.list = newList;
    },
    addDiv:(state, { payload }) => {
      state.list = payload;
    },
    updateJobsInfo: (state, { payload }) => {
      const newList = state.list.map((item, id) => {
        if (item.id === payload.id) {
        return payload;
      }
        return item
      });
      state.list=newList
    },
    deleteJobsInfo:(state,{payload})=>{
      state.list=[
      ...state.list.filter((item)=>item.id!==payload.id)
    ]
  }
  },
});

export const { addJobsInfo, addDiv, updateJobsInfo, deleteJobsInfo } = jobsSlice.actions;

export default jobsSlice.reducer;
