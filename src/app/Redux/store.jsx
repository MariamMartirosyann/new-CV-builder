import { configureStore } from '@reduxjs/toolkit';
import contactInfoReducer from './ContactInfoSlice';
import jobsInfoReducer from './JobsSlice';
import skillsInfoReducer from './SkillsSlice'


export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    jobsInfo:jobsInfoReducer,
    skillsInfo:skillsInfoReducer,
    
  },
});