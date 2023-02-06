import NoteEmpty from "./NoteEmpty";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, isEmpty, onArchieved, btnTitle }) {
  return isEmpty ? (
    <NoteEmpty />
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          id={note.id}
          onDelete={onDelete}
          onArchieved={onArchieved}
          btnTitle={btnTitle}
        />
      ))}
    </div>
  );
}

export default NoteList;
