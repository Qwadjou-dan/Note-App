import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editNotes } from "../Slices/notesSlice";

function EditNote({ note }) {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState("");
  const [currentNote, setCurrentNote] = useState(null);
  const dispatch = useDispatch();

  const handleShow = (note) => {
    setShow(true);
    setNotes(note.notes);
    setCurrentNote(note);
  };

  const handleNote = (e) => {
    setNotes(e.target.value);
  };

  const handleSave = () => {
    let updatedNote = {
      notes,
    };
    dispatch(editNotes({ id: currentNote.id, updatedNote }));
    setShow(false);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={() => handleShow(note)}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={notes}
            type="text"
            onChange={handleNote}
            placeholder="Type your note here..."
            className=" border-2 rounded-md w-[300px] h-[400px] p-2"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleSave();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditNote;
