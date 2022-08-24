import { configureStore } from "@reduxjs/toolkit";
import contactInfoReducer from "./ContactInfoSlice";
import jobsInfoReducer from "./JobsSlice";
import educationReducer from "./EducationSlice";
import skillsInfoReducer from "./SkillsSlice";
import preWrittenInfoReducer from "./PreWrittenSlice";
import languagesInfoReducer from "./LanguagesSlice";
import objectiveInfoReducer from "./ObjectiveInfoSlice";
import submitObjectiveInfoReducer from "./SubmitObjectiveInfoSlice";
import imageReducer from "./ImageSlice"

export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    jobsInfo: jobsInfoReducer,
    educationInfo: educationReducer,
    skillsInfo: skillsInfoReducer,
    preWrittenInfo: preWrittenInfoReducer,
    languagesInfo:languagesInfoReducer,
    objectiveInfo:objectiveInfoReducer,
    submitObjectiveInfo:submitObjectiveInfoReducer,
    image:imageReducer
  },
});
