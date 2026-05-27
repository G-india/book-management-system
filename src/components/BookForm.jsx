import { useState, useEffect } from "react";

const BookForm = ({
  addBook,
  editBook,
  updateBook,
}) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editBook) {
      setBook(editBook);
    }
  }, [editBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editBook) {
      updateBook(book);
    } else {
      addBook(book);
    }

    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={book.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={book.year}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editBook
          ? "Update Book"
          : "Add Book"}
      </button>
    </form>
  );
};

export default BookForm;