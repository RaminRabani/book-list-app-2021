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
      error: null,
    };
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks(23);
  }

  getBooks = async (quantity) => {
    try {
      const data = await this.props.getBooks(quantity);

      let books = [...this.state.books, ...data];
      this.setState({ books, filteredBooks: books });
    } catch (error) {
      this.setState({ error });
    }
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
          {this.state.error ? (
            <div className="error-message">Oops! Please try again.</div>
          ) : (
            <div>
              <h1>Book List</h1>
              <Search searchBooks={this.searchBooks} />
              <BookList books={this.state.filteredBooks} />
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
