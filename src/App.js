import NoteList from "./components/NoteList.js";
import { getInitialData } from "./utils/index.js";

function App() {
  const notes = getInitialData();
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
