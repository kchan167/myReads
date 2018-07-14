import React from "react";
import Book from "./Book"
import PropTypes from "prop-types";

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        // Need to loop books inside the bookshelf
                        this.props.books.map((book) => (
                            <li key={book.title} class={book.title.trim()}>
                                <Book book={book}/>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;
