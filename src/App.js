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
      isLoading: true,
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
      this.setState({ books, filteredBooks: books, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  searchBooks = (query) => {
    const filteredBooks = this.state.books.filter((book) => {
      let title = book.title.toLowerCase();
      let author = book.author.toLowerCase();
      query = query.toLowerCase();

      const titleIncluded = includes(title, query);
      const authorIncluded = includes(author, query);

      return titleIncluded || authorIncluded;
    });
    this.setState({ filteredBooks });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="App">
            <div className="loading-spinner"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        {this.state.error ? (
          <div className="error-message">Oops! Please try again.</div>
        ) : (
          <div>
            <h1>Book List</h1>
            <Search searchBooks={this.searchBooks} />
            <BookList books={this.state.filteredBooks} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
