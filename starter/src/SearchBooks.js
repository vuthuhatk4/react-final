import React from "react";
import { Link } from "react-router-dom";
import "./Bookshelves";
import Bookshelves from "./Bookshelves";

const SearchBooks = ({ filteredBooks, searchBooks, moveOption }) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <Bookshelves
                book={book}
                key={book.id}
                moveOption={moveOption}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
