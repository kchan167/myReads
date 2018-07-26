import React from 'react';
import { Route } from 'react-router-dom';
import Bookmenu from './Component/Bookmenu';
import SearchBooks from './Component/SearchBooks';
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

  // componentDidMount function
  // Get data from BooksAPI immediately after a component is mounted
  componentDidMount() {
      this.getBooks();
  }

  // getBooks function
  // Get data from BooksAPI
  getBooks() {
      BooksAPI.getAll().then(data => {
          this.setState({
              books: data
          });
      });
  }

  // changeShelf function
  // using update function from BooksAPI to change book's bookShelfTitle
  changeShelf = (book: any, shelf: string) => {
      if ( shelf !== book.shelf) {
          BooksAPI.update(book, shelf).then(response => {
              this.getBooks();
          });
      }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render = {() => (
            <Bookmenu
                books={this.state.books}
                onChangeShelf={this.changeShelf}
            />
        )}/>

        <Route path="/search" render={() => (
            <SearchBooks bookOnShelf={this.state.books} onChangeShelf={this.changeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
