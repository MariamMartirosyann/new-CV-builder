import { configureStore } from "@reduxjs/toolkit";
import contactInfoReducer from "./ContactInfoSlice";
import jobsInfoReducer from "./JobsSlice";
import skillsInfoReducer from "./SkillsSlice";
import preWrittenInfoReducer from "./PreWrittenSlice";

export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    jobsInfo: jobsInfoReducer,
    skillsInfo: skillsInfoReducer,
    preWrittenInfo: preWrittenInfoReducer,
  },
});
