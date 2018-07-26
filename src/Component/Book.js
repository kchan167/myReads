import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
    render() {
        let book = this.props.book;
        const isImage = book.imageLinks;

        return (
            <div className="book">
              <div className="book-top">
                {
                    isImage ? (
                        <div
                            className="book-cover"
                            style=
                            {{
                                width: 128,
                                height: 193,
                                background: "url(" + book.imageLinks.thumbnail + ")"
                            }}
                            >
                        </div>
                    ) : (
                        // Doesn't have an image background
                        <div
                            className="book-cover"
                            style=
                            {{
                                width: 128,
                                height: 193,
                                // white background
                                background: "url(http://via.placeholder.com/128x193?text=?)"
                            }}
                            >
                        </div>
                    )
                }
                <div className="book-shelf-changer">
                  <select
                      defaultValue={this.props.book.shelf || "none"}
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
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                  {book.hasOwnProperty('authors') && (
                      book.authors.map((author) => (
                          <div key={author}>{author}</div>
                      ))
                  )}
              </div>
            </div>
        )
    }
}
export default Book;
