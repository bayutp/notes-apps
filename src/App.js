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
  }

  onDeleteHanlder(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHanlder}
          isEmpty={this.state.notes.length === 0}
        />
      </div>
    );
  }
}

export default App;
