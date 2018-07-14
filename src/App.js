import React from 'react';
// import * as BooksAPI from './BooksAPI'
import Bookmenu from './Component/Bookmenu';
import * as BooksAPI from "./BooksAPI";
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     books: []
 };

  // Get data from BooksAPI immediately after a component is mounted
  componentDidMount() {
      this.getBooks();
  }
  // Get data from BooksAPI
  getBooks() {
      BooksAPI.getAll().then(data => {
          this.setState({
              books: data
          });
      });
  }

  changeShelf = (book: any, shelf: string) => {
      if(shelf !== book.shelf) {
          BooksAPI.update(book, shelf).then(response => {
              this.getBooks();
          });
      }
  }

  render() {
    return (
      <div className="app">
          {this.state.showSearchPage ? (
            <div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          ) : (
              <Bookmenu books={this.state.books} onChangeShelf={this.changeShelf}/>
          )}
      </div>
    )
  }
}

export default BooksApp
