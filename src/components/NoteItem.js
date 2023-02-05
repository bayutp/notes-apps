import NoteFooter from "./NoteFooter";

function NoteItem({ id, title, body, createdAt, archived, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <NoteFooter id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
