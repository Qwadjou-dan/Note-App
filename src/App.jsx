import React from "react";
import AddNote from "./Components/AddNote";
import NotesList from "./Components/NotesList";

const App = () => {
  return (
    <div className="flex flex-row gap-10 mx-10 my-5">
      <AddNote />
      <NotesList />
    </div>
  );
};

export default App;
