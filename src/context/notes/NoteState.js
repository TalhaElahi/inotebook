import react, { useState, useSyncExternalStore } from "react";
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

  return (
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
