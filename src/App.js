import React from "react";
import BookList from "./BookList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks(23);
  }

  getBooks = (quantity) => {
    this.props.getBooks(quantity, (data) => {
      let books = [...this.state.books, ...data];
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Book List
          <BookList books={this.state.books} />
        </header>
      </div>
    );
  }
}

export default App;
