import React from "react";
import NoteList from "./components/NoteList.js";
import { getInitialData } from "./utils/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHanlder = this.onDeleteHanlder.bind(this);
    this.onArchievedHandler = this.onArchievedHandler.bind(this);
  }

  onDeleteHanlder(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchievedHandler(id) {
    const newNote = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState(() => {
      return {
        notes: newNote,
      };
    });
  }

  render() {
    const archived = this.state.notes.filter((note) => note.archived === true);
    const unarchieved = this.state.notes.filter(
      (note) => note.archived === false
    );
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={unarchieved}
          onDelete={this.onDeleteHanlder}
          isEmpty={unarchieved.length === 0}
          onArchieved={this.onArchievedHandler}
          btnTitle="Arsipkan"
        />
        <h2>Arsip</h2>
        <NoteList
          notes={archived}
          onDelete={this.onDeleteHanlder}
          isEmpty={archived.length === 0}
          onArchieved={this.onArchievedHandler}
          btnTitle="Pindahkan"
        />
      </div>
    );
  }
}

export default App;
