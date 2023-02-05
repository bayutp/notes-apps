import NoteEmpty from "./NoteEmpty";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, isEmpty }) {
  return isEmpty ? (
    <NoteEmpty />
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
