import React from "react";

class InputNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxTitle: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;

    this.setState({
      title: title.slice(0, 50),
      maxTitle: title.length > 50 ? 0 : 50 - title.length,
    });

    console.log(`max title: ${this.state.maxTitle}`);
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "", maxTitle: 50 });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          <small>Sisa karakter: {this.state.maxTitle}</small>
        </p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Ini adalah judul.."
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            placeholder="Tulis catatanmu disini.."
            rows="10"
            onChange={this.onBodyChangeEventHandler}
            value={this.state.body}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default InputNotes;
