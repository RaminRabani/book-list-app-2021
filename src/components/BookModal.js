import React from "react";
import ReactDOM from "react-dom";

const BookModal = (props) => {
  const { book } = props;

  const {
    title,
    author,
    image,
    description,
    genre,
    published,
    publisher,
    isbn,
  } = book;

  return ReactDOM.createPortal(
    <div className="book-modal-background">
      <div className="book-modal-container">
        <div className="book-modal-close" onClick={props.onClose}>
          &times;
        </div>
        <div className="book-modal-content">
          <h1>{title}</h1>
          <h3>By: {author}</h3>
          <img src={image} width="200" height="200" alt="book" />
          <p>{description}</p>
          <div>
            <strong>Genre:</strong> {genre}
          </div>
          <div>
            <strong>Published:</strong> {published}
          </div>
          <div>
            <strong>Publisher:</strong> {publisher}
          </div>
          <div>
            <strong>ISBN:</strong> {isbn}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookModal;
