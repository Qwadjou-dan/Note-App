import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNotes } from "../Slices/notesSlice";

const AddNote = () => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let newNote = { notes, id: uuid() };
    dispatch(addNotes({ notes, id: uuid() }));
    setNotes("");
  };

  return (
    <div>
      <h3 className="mb-5 text-2xl">Input Note Here</h3>
      <div className="flex flex-col gap-5">
        <textarea
          value={notes}
          type="text"
          onChange={handleAddNote}
          placeholder="Type your note here..."
          className=" border-2 rounded-md w-[300px] h-[400px] p-2"
        ></textarea>
        <button
          className="border-none p-2 rounded-md bg-green-400"
          onClick={handleSubmit}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
