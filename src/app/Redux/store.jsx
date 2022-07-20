import { configureStore } from '@reduxjs/toolkit';
import contactInfoReducer from './ContactInfoSlice'


export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
  },
});