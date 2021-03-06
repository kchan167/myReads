import React from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Bookmenu extends React.Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <Bookshelf
                bookShelfTitle="Currently Reading"
                books={this.props.books.filter(book => book.shelf === "currentlyReading")}
                key="currently"
                onChangeShelf={this.props.onChangeShelf}
            />
            <Bookshelf
                bookShelfTitle="Want To Read"
                books={this.props.books.filter(book => book.shelf ==="wantToRead")}
                key="wantToRead"
                onChangeShelf={this.props.onChangeShelf}
                />
            <Bookshelf
                bookShelfTitle="Read"
                books={this.props.books.filter(book => book.shelf === "read")}
                key="read"
                onChangeShelf={this.props.onChangeShelf}
                />
            </div>
            <div className="open-search">
              <Link
                  to="/search"
                  className="open-search"
              >
                Add a book
              </Link>
            </div>
            </div>
        )
    }
}

export default Bookmenu;
