import React from "react";
import BookListItem from "./BookListItem";

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.length ? (
        props.books.map(function (book, key) {
          return <BookListItem book={book} key={key} />;
        })
      ) : (
        <div className="no-results-error">No Results</div>
      )}
    </div>
  );
};

export default BookList;
