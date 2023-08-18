import React, { useContext,useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({description:"",tag:"",title:""});

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({description:"",tag:"",title:""})
  };

  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  };
  return (
    <div>
      <div className="container">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.title}
              minLength={5}
              required
            />
           
           
          </div>
          <div className="mb-3">
            <label
              htmlFor="desc"
              className="form-label"
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              value={note.description}
              minLength={5}
              required

            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="tag"
              className="form-label"
            >
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}


            />
          </div>
         
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length<5 || note.description.length<5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
