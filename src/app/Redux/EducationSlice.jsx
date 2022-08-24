import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const educationSlice = createSlice({
  name: "educationInfo",
  initialState,
  reducers: {
    addEducation: (state, action) => {
      const newItem = {
        id:action.payload.id,
        degree: action.payload.degree,
        institutionName: action.payload.institutionName,
        location:action.payload.location,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        description:action.payload.description,
      };
      const newList = [...state.list, newItem];
      state.list = newList;
    },
    addDiv:(state, { payload }) => {
      state.list = payload;
    },
    updateEducation: (state, { payload }) => {
      const newList = state.list.map((item, id) => {
        if (item.id === payload.id) {
        return payload;
      }
        return item
      });
      state.list=newList
    },
    deleteEducation:(state,{payload})=>{
      state.list=[
      ...state.list.filter((item)=>item.id!==payload.id)
    ]
  }
  },
});

export const {  addEducation, addDiv,  updateEducation, deleteEducation } = educationSlice.actions;

export default educationSlice.reducer;
