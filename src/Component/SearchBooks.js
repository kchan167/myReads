import React from "react";
import * as BooksAPI from "../BooksAPI";
import {Link} from "react-router-dom"
import ProTypes from "prop-types";
import Book from "./Book";

class SearchBooks extends React.Component {
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
                        Test
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
