import { configureStore } from '@reduxjs/toolkit';
import examsReducer from './examsSlice';

export const store = configureStore({
  reducer: {
    exams: examsReducer
  }
});
