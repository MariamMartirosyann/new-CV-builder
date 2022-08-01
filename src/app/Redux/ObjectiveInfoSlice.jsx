import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  makeBold:false
};

const objectiveSlice = createSlice({
  name: "objectiveInfo",
  initialState,
  reducers: {
    addObjectiveInfo: (state, { payload }) => {
      state.list = payload;
    },
    deleteObjectiveInfo:(state,{payload})=>{
     const newList=[
        ...state.list.filter(i=>i.id!==payload.id)
      ]
      state.list=newList
    },
    makeBoldState:(state, {payload})=>{
      state.makeBold=payload
    }
  },

});

export const { addObjectiveInfo,deleteObjectiveInfo,makeBoldState } = objectiveSlice.actions;

export default objectiveSlice.reducer;
