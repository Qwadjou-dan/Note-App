import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNotes: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },

    editNotes: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, ...action.payload.updatedNote };
        }
        return note;
      });
    },

    deleteNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNotes, editNotes, deleteNotes } = notesSlice.actions;
export default notesSlice.reducer;
