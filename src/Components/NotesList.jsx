import React from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  const display = useSelector((state) => {
    return state.notesReducer;
  });
  return (
    <div className="space-y-5">
      <h3 className="text-2xl">List Of Notes</h3>
      <ol className="list-decimal">
        {display.notes.map((note) => {
          return (
            <div key={note.id}>
              <li className="border rounded-md w-[700px] h-[100px] mb-2 bg-green-50 p-2">
                {note.notes}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default NotesList;
