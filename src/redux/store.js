import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesReducer';
import notesReducer from './reducers/notesReducer';

export default configureStore({
  reducer: { categories: categoriesReducer, notes: notesReducer },
});
