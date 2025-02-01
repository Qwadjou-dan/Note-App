import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Slices/notesSlice";

const store = configureStore({
  reducer: {
    notesReducer,
  },
});

export default store;
