import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
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

  // Add a Note

  const addNote = (title, description, tag) => {
    // TODO API call
console.log("adding a new note");
   const note = {
      "_id": "64ca6915f8686b2fa8f1ec1f",
      "user": "64c908dee7e7d74dc792ca23",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-08-02T14:32:53.935Z",
      "__v": 0
    }
    setNotes(notes.concat(note));
  };


  // Delete a Note
  const deleteNote = () => {};



  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
