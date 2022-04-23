import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Task', icon: 'fa-cart-shopping' },
  { id: 2, name: 'Random Thought', icon: 'fa-head-side-virus' },
  { id: 3, name: 'Idea', icon: 'fa-lightbulb' },
  { id: 4, name: 'Quote', icon: 'fa-quote-right' },
];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
