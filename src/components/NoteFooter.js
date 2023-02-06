import React from "react";

function NoteFooter({ id, onDelete, onArchieved, btnTitle }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchieved(id)}
      >
        {btnTitle}
      </button>
    </div>
  );
}

export default NoteFooter;
