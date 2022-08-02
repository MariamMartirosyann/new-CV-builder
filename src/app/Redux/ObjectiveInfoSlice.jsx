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
    deleteObjectiveInfo:(state,{payload})=>{
     const newList=[
        ...state.list.filter(i=>i.id!==payload.id)
      ]
      state.list=newList
    },
   
  },

});

export const { addObjectiveInfo,deleteObjectiveInfo } = objectiveSlice.actions;

export default objectiveSlice.reducer;
