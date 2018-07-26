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

    // updateQuery function
    // Each time the query is changed, refetch and re-render the result
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

    // updateBooks function
    // Once received a response from BookAPI, compare book.id with the books in bookOnShelf
    updateBooks(books) {
        const booksFromSearchResult = books.map(book => {
            book.shelf = "none";
            this.props.bookOnShelf.forEach(oldBook => {
                if(book.id === oldBook.id) {
                    book.shelf = oldBook.shelf;
                }
            });
            return book;
        });
        this.setState({
            books: booksFromSearchResult
        });
    }

    // SearchBooks function
    searchBooks(query) {
        BooksAPI.search(query).then (
            response => {
                if(response.error) {
                    this.setState({
                        books: []
                    });
                }
                else {
                        console.log(response);
                        this.updateBooks(response);
                        console.log(this.state.books);
                }
            },
            error => {
                console.log(error);
            }
        );
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
                            this.state.books.map(data =>
                                <Book book={data} key={data.id} onChangeShelf={this.props.onChangeShelf}/>
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
