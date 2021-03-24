import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({ query }, () => {
      this.props.searchBooks(this.state.query);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchBooks(this.state.query);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Search: <input type="text" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;