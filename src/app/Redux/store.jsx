import { configureStore } from '@reduxjs/toolkit';
import contactInfoReducer from './ContactInfoSlice';
import jobsInfoReducer from './JobsSlice'


export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    jobsInfo:jobsInfoReducer,
    
  },
});