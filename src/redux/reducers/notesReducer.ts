import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Will Smith',
    created: '11.11.2020',
    categoryId: 4,
    content:
      'Money and success don’t change people; they merely amplify what is already there.',
    isActive: true,
  },
  {
    id: 2,
    name: 'Shopping list',
    created: '20.04.2021',
    categoryId: 1,
    content: 'Tomatoes, Bread',
    isActive: false,
  },
  {
    id: 3,
    name: 'The theory of evolution',
    created: '16.02.2021',
    categoryId: 2,
    content:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tincidunt tincidunt erat. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
    isActive: true,
  },
  {
    id: 4,
    name: 'Implement new feature',
    created: '19.03.2021',
    categoryId: 3,
    content:
      'Suspendisse non nisl sit 18.01.2020 amet velit hendrerit rutrum. Nam adipiscing. Nullam accumsan lorem in dui 22.03.2021.',
    isActive: true,
  },
  {
    id: 5,
    name: 'John Lennon',
    created: '11.01.2021',
    categoryId: 4,
    content: 'Life is what happens when you’re busy making other plans.',
    isActive: true,
  },
  {
    id: 6,
    name: 'Thomas A. Edison',
    created: '01.10.2020',
    categoryId: 4,
    content:
      'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    isActive: false,
  },
  {
    id: 7,
    name: 'Praesent porttitor nulla vitae posuere',
    created: '19.03.2021',
    categoryId: 3,
    content:
      'In hac habitasse platea dictumst. Proin 19.04.2022 sapien ipsum, porta a, auctor quis, euismod ut, mi. Nullam dictum felis eu pede 21.05.2022 mollis pretium. Aenean viverra rhoncus pede. Quisque id odio. Praesent blandit 03.03.2020 laoreet nibh.',
    isActive: true,
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => [...state, action.payload],
    editNote: (state, action) => {
      const filtered = state.filter((note) => note.id !== action.payload.id);
      return [...filtered, action.payload];
    },
    archiveNote: (state, action) =>
      state.map((note) => {
        if (note.id === action.payload) {
          return { ...note, isActive: !note.isActive };
        }
        return note;
      }),
    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
    deleteAllNotes: (state) => state.filter((note) => !note.isActive),
  },
});

export const { addNote, deleteNote, editNote, archiveNote, deleteAllNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
