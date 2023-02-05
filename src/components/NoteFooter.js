import React from "react";

function NoteFooter() {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button">Delete</button>
      <button className="note-item__archive-button">Archive</button>
    </div>
  );
}

export default NoteFooter;
