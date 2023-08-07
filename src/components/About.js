import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

export const About = () => {
  const a = useContext(noteContext);

  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      This is About {a.state.name} and class is {a.state.class}
    </div>
  );
};
