import { createSlice } from "@reduxjs/toolkit";

export const languageAbilityLevel = [
  { id: 1, level: "Elementary" },
  { id: 2, level: "Intermediate" },
  { id: 3, level: "Advanced" },
  { id: 4, level: "Native" },
];
const initialState = {
  list:[],
 
  
};
const languagesSlice = createSlice({
  name:"languagesInfo",
  initialState,
  reducers: {
    addLanguageLevel:(state, action) => {
      const newItem = {
        id:action.payload.id,
        language:action.payload.language,
        languageLevel:action.payload.languageLevel,
        courseOrCertification:action.payload.courseOrCertification
        
      };
      const newList = [...state.list, newItem];
      state.list= newList;
    },
    updateLanguageLevel: (state, { payload }) => {
      const newList = state.list.map((item, id) => {
        if (item.id === payload.id) {
        return payload;
      }
        return item
      });
      state.list=newList
    },
  },
});

export const {  addLanguageLevel,updateLanguageLevel } = languagesSlice.actions;

export default languagesSlice.reducer;
