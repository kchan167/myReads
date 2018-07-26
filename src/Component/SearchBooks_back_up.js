import React from "react";
import * as BooksAPI from "../BooksAPI";
import {Link} from "react-router-dom"
import ProTypes from "prop-types";
import Book from "./Book";

class SearchBooks extends React.Component {
    state = {
        query: "",
        books: []
    }

    updateQuery = (query) => {
        this.setState({query: query});
        if(query) {
            this.searchBooks(query);
        }
        else {
            this.setState({
                books: []
            })
        }
    }

    searchBooks(query) {
        BooksAPI.search(query).then (
            response => {
                if(response.error) {
                    this.setState({
                        books: []
                    });
                    console.log(response.error)
                }
                else {
                    console.log(response);
                    this.setState({
                        books: response
                    })
                }
            }
        )
    }

    // Write a function to check if the book is inside the shelf
    ChangeBookShelf() {
    //Compare Books with shelf
    // if Yes, Return the book within the shelf and the props.changeShelf
    // if Not, return the search book and use a new function to update the shelf
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                        { JSON.stringify(this.state.query) }
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map(book =>
                                <li key={book.id} className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                                            }}
                                        ></div>
                                        <div className="book-shelf-changer">
                                            <select
                                                defaultValue={book.shelf || "none"}
                                                value={book.shelf}
                                                onChange={(event) => this.props.onChangeShelf(this.props.book, event.target.value)}
                                            >
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">
                                        {book.title}
                                    </div>
                                    <div className="book-authors">
                                        {book.hasOwnProperty('authors') && (
                                            book.authors.map((author) => (
                                                <div key={author}>{author}</div>
                                            ))
                                        )}
                                    </div>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
