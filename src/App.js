import React from "react";
import Header from "./components/Header.js";
import InputNotes from "./components/InputNotes.js";
import NoteList from "./components/NoteList.js";
import { getInitialData } from "./utils/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onDeleteHanlder = this.onDeleteHanlder.bind(this);
    this.onArchievedHandler = this.onArchievedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
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

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  onSearchEventHandler(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().match(this.state.search.toLowerCase())
    );
    const archived = notes.filter((note) => note.archived === true);
    const unarchieved = notes.filter((note) => note.archived === false);

    return (
      <div className="note-app">
        <Header onSearch={this.onSearchEventHandler} />
        <div className="note-app__body">
          <InputNotes addNote={this.onAddNoteHandler} />
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
      </div>
    );
  }
}

export default App;
