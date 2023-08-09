import  { useState } from "react";
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
      _id: "64ca5b98fed20d42c1da3220",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes",
      description: "Please acces the playlist",
      tag: "youtube",
      date: "2023-08-02T13:35:20.811Z",
      __v: 0,
    },
    {
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
    {
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },{
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },{
      _id: "64ca6915f8686b2fa8f1ec1f",
      user: "64c908dee7e7d74dc792ca23",
      title: "New Notes3",
      description: "Please subscribe the channel",
      tag: "youtube",
      date: "2023-08-02T14:32:53.935Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
