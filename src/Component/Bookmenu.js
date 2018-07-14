import React from "react";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

class Bookmenu extends React.Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <Bookshelf bookShelfTitle="Currently Reading" books={this.props.books.currentlyReading}/>
            <Bookshelf bookShelfTitle="Want To Read" books={this.props.books.wantToRead}/>
            <Bookshelf bookShelfTitle="Read" books={this.props.books.read}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
            </div>
        )
    }
}

export default Bookmenu;
