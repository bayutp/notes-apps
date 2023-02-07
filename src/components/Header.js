import React from "react";

function Header({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
    </div>
  );
}

export default Header;
