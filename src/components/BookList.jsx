const BookList = ({
  books,
  deleteBook,
  setEditBook,
}) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          className="book-card"
          key={book.id}
        >
          <h3>{book.title}</h3>

          <p>
            <strong>Author:</strong>{" "}
            {book.author}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {book.genre}
          </p>

          <p>
            <strong>Year:</strong>{" "}
            {book.year}
          </p>

          <div className="actions">
            <button
              className="edit-btn"
              onClick={() =>
                setEditBook(book)
              }
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                deleteBook(book.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;