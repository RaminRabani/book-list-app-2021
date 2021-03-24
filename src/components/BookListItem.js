import React from "react";

const BookListItem = (props) => {
  const { title, author, image } = props.book;

  return (
    <div className="book-list-item">
      <div className="book-list-item-title">{title}</div>
      <div className="book-list-item-author">By: {author}</div>
      <img className="book-list-item-image" src={image} alt="book" />
    </div>
  );
};

export default BookListItem;
