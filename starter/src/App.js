import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    });
  }, []);

  const searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((result) => {
        updateSearchedResult(result);
        if (result.error !== "empty query") {
          setFilteredBooks(result);
        } else {
          setFilteredBooks([]);
        }
      });
    } else {
      setFilteredBooks([]);
    }
  };

  const updateAfterMoveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((updated) =>
      BooksAPI.getAll().then((books) => {
        setAllBooks(books);
        updateSearchedResult(filteredBooks);
      })
    );
  };

  const updateSearchedResult = (values) => {
    for (let value of values) {
      for (let book of allBooks) {
        if (value.id === book.id) {
          value.shelf = book.shelf;
        }
      }
    }
    setFilteredBooks(values);
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListBooks
            books={allBooks}
            moveOption={(book, shelf) => updateAfterMoveBook(book, shelf)}
          />
        }
      />
      <Route
        path="/search"
        element={
          <div>
            <SearchBooks
              filteredBooks={filteredBooks}
              searchBooks={(query) => searchBooks(query)}
              moveOption={(book, shelf) => updateAfterMoveBook(book, shelf)}
            />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
