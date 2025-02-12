import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import EditNote from "./EditNote";
import { deleteNotes } from "../Slices/notesSlice";
import { useDispatch } from "react-redux";

const NotesList = () => {
  const dispatch = useDispatch();

  const display = useSelector((state) => {
    return state.notesReducer;
  });

  const handleDelete = (id) => {
    dispatch(deleteNotes(id));
  };

  return (
    <div className="space-y-5">
      <h3 className="text-2xl">List Of Notes</h3>
      <ol className="list-decimal">
        {display.notes.map((note) => {
          return (
            <div key={note.id} className="mb-8">
              <li className="border rounded-md w-[700px] h-[100px] mb-2 bg-green-50 p-2">
                {note.notes}
              </li>
              <div className="flex gap-2">
                <EditNote note={note} />
                <Button variant="danger" onClick={() => handleDelete(note.id)}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default NotesList;
