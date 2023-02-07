import React from "react";

function Header({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Note App</h1>
      <input type="text" placeholder="Search" onChange={onSearch} />
    </div>
  );
}

export default Header;
