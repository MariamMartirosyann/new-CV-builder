import { configureStore } from "@reduxjs/toolkit";
import contactInfoReducer from "./ContactInfoSlice";
import jobsInfoReducer from "./JobsSlice";
import skillsInfoReducer from "./SkillsSlice";
import preWrittenInfoReducer from "./PreWrittenSlice";
import languagesInfoReducer from "./LanguagesSlice";
import objectiveInfoReducer from "./ObjectiveInfoSlice"

export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    jobsInfo: jobsInfoReducer,
    skillsInfo: skillsInfoReducer,
    preWrittenInfo: preWrittenInfoReducer,
    languagesInfo:languagesInfoReducer,
    objectiveInfo:objectiveInfoReducer,
  },
});
