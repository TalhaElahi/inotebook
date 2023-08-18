import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const s1 = {
  //   name: "Talha",
  //   class: "2002c2",
  // };
  //   const [state, setState] = useState(s1);
  //   const  update = () => {
  //       setTimeout(() => {
  //         setState({
  //           name: "Arif",
  //           class: "1810c2",
  //         });
  //       },1000);
  //     };

  const notesInitial = [
    {
      _id: "7664ca5b98fed820d425c1da3220",
      user: "64c908dee7e7d746dc792ca23",
      title: "New Notes",
      description: "Please acces the playlist",
      tag: "youtube",
      date: "2023-08-02T13:35:20.811Z",
      __v: 0,
    },
    {
      _id: "0064ca6915f87686b2fa18f1ec1f",
      user: "64c908dee7e7d74dc1792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "9964ca6915f4868336b2fa8f1ec1f",
      user: "64c908dee7e733d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "8864ca6915f867786b2gfa8f1ec1f",
      user: "64c908dee7e777d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "7764ca69d15f868600b2fa8f1ec1f",
      user: "64c908dee007e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "2164ca69a15fa348686b2fa8f1ec1f",
      user: "64c908dee734e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "ss64ca6915f8665486bs2fa8f1ec1f",
      user: "64c908d222ee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "aa64ca6915f86654d86b2fa8f1ec1f",
      user: "64c908dee7e6547d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async (title, description, tag) => {
    // TODO API call
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOTA4ZGVlN2U3ZDc0ZGM3OTJjYTIzIn0sImlhdCI6MTY5MDkwODIyNn0._eb2EDFRkc4Z2PZu_dx1eMq7d9SNMOUeEagGooqYof0",
      },
      // body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    console.log(json);

    // console.log("getting all note");
    //    const note = {
    //       "_id": "64ca6915f8686b2fa8f1ec1f",
    //       "user": "64c908dee7e7d74dc792ca23",
    //       "title": title,
    //       "description": description,
    //       "tag": tag,
    //       "date": "2023-08-02T14:32:53.935Z",
    //       "__v": 0
    //     }
    setNotes(json);
  };

  // Add a Note

  const addNote = async (title, description, tag) => {
    // TODO API call
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOTA4ZGVlN2U3ZDc0ZGM3OTJjYTIzIn0sImlhdCI6MTY5MDkwODIyNn0._eb2EDFRkc4Z2PZu_dx1eMq7d9SNMOUeEagGooqYof0",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    setNotes(notes.concat(note));

    console.log("adding a new note");
    // const note =json;
  };

  // Delete a Note

  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOTA4ZGVlN2U3ZDc0ZGM3OTJjYTIzIn0sImlhdCI6MTY5MDkwODIyNn0._eb2EDFRkc4Z2PZu_dx1eMq7d9SNMOUeEagGooqYof0",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    console.log("deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOTA4ZGVlN2U3ZDc0ZGM3OTJjYTIzIn0sImlhdCI6MTY5MDkwODIyNn0._eb2EDFRkc4Z2PZu_dx1eMq7d9SNMOUeEagGooqYof0",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
   let newNotes=JSON.parse(JSON.stringify(notes));
    // Logic to Edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;

      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
