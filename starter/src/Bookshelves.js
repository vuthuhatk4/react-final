import PropTypes from "prop-types";
const Bookshelves = ({ book, moveOption }) => {
  let shelfValue = book.shelf ? book.shelf : "add";
  let options = book.shelf
    ? [{ value: "move", displayTxt: "Move to...", disable: true }]
    : [{ value: "add", displayTxt: "Add to...", disable: true }];

  options.push({ value: "currentlyReading", displayTxt: "Currently Reading" });
  options.push({ value: "wantToRead", displayTxt: "Want to Read" });
  options.push({ value: "read", displayTxt: "Read" });

  if (book.shelf !== undefined)
    options.push({ value: "none", displayTxt: "None" });

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks && (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            ></div>
          )}
          <div className="book-shelf-changer">
            <select
              value={shelfValue}
              onChange={(event) => moveOption(book, event.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disable}>
                  {option.displayTxt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Unknown Author"}
        </div>
      </div>
    </li>
  );
};
Bookshelves.prototype = {
  book: PropTypes.object,
  moveOption: PropTypes.func,
};
export default Bookshelves;
