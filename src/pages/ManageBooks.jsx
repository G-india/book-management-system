import { useEffect, useState } from "react";

import API from "../services/api";

import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  const [editBook, setEditBook] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [genre, setGenre] =
    useState("");

  const fetchBooks = async () => {
    const response = await API.get(
      "/books"
    );

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    const response = await API.post(
      "/books",
      book
    );

    setBooks([...books, response.data]);
  };

  const deleteBook = async (id) => {
    await API.delete(`/books/${id}`);

    setBooks(
      books.filter(
        (book) => book.id !== id
      )
    );
  };

  const updateBook = async (
    updatedBook
  ) => {
    const response = await API.put(
      `/books/${updatedBook.id}`,
      updatedBook
    );

    setBooks(
      books.map((book) =>
        book.id === updatedBook.id
          ? response.data
          : book
      )
    );

    setEditBook(null);
  };

  const filteredBooks = books.filter(
    (book) => {
      const matchSearch =
        book.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        book.author
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchGenre =
        genre === "" ||
        book.genre === genre;

      return (
        matchSearch && matchGenre
      );
    }
  );

  return (
    <div className="container">
      <BookForm
        addBook={addBook}
        editBook={editBook}
        updateBook={updateBook}
      />

      <div className="controls">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          genre={genre}
          setGenre={setGenre}
        />
      </div>

      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        setEditBook={setEditBook}
      />
    </div>
  );
};

export default ManageBooks;