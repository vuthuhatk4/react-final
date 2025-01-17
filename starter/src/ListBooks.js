import PropTypes from "prop-types";
import "./Bookshelves";
import { Link } from "react-router-dom";
import Bookshelves from "./Bookshelves";

const ListBooks = ({ books, moveOption }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "currentlyReading")
                  .map((book) => (
                    <Bookshelves
                      book={book}
                      key={book.id}
                      moveOption={moveOption}
                    />
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "wantToRead")
                  .map((book) => (
                    <Bookshelves
                      book={book}
                      key={book.id}
                      moveOption={moveOption}
                    />
                  ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "read")
                  .map((book) => (
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
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  moveOption: PropTypes.func
};
export default ListBooks;
