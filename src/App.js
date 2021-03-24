import React from "react";
import BookList from "./BookList";
import Search from "./Search";

import { includes } from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filteredBooks: [],
    };
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks(23);
  }

  getBooks = (quantity) => {
    this.props.getBooks(quantity, (data) => {
      let books = [...this.state.books, ...data];
      this.setState({ books, filteredBooks: books });
    });
  };

  searchBooks = (query) => {
    const filteredBooks = this.state.books.filter((book) => {
      let title = book.title.toLowerCase();
      let author = book.author.toLowerCase();
      query = query.toLowerCase();

      const titleIncludes = includes(title, query);
      const authorIncludes = includes(author, query);

      return titleIncludes || authorIncludes;
    });
    this.setState({ filteredBooks });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book List</h1>
          <Search searchBooks={this.searchBooks} />
          <BookList books={this.state.filteredBooks} />
        </header>
      </div>
    );
  }
}

export default App;
