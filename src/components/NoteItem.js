import React from "react";
import NoteFooter from "./NoteFooter";

function NoteItem({ id, title, body, createdAt, archived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <NoteFooter />
    </div>
  );
}

export default NoteItem;
