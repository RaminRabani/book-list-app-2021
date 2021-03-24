import React from "react";
import BookModal from "./BookModal";

class BookListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { title, author, image } = this.props.book;

    return (
      <div
        className="book-list-item"
        onClick={this.state.showModal ? () => {} : this.toggleModal}
      >
        <div className="book-list-item-title">{title}</div>
        <div className="book-list-item-author">By: {author}</div>
        <img className="book-list-item-image" src={image} alt="book" />
        {this.state.showModal ? (
          <BookModal book={this.props.book} onClose={this.toggleModal} />
        ) : null}
      </div>
    );
  }
}

export default BookListItem;
