import React, { useState, useEffect } from 'react';
import { fetchBooks, requestBook, addBook } from '../../api/bookApi'; 
import './style.css';
import { AiOutlineEdit, AiFillDelete, AiOutlineEye } from 'react-icons/ai';
import BookModal from '../../components/Modal';
import AddBookForm from './AddBookForm'; 

const BookPage = ({ userRole, userId }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  useEffect(() => {
    const fetchBooksFromBackend = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchBooksFromBackend();
  }, [isModalOpen, isAddBookModalOpen]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const handleRequestBook = async (bookId) => {
    try {
      await requestBook(bookId, userId);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddBook = async (newBookData) => {
    try {
      await addBook(newBookData);
      setIsAddBookModalOpen(false);

      const updatedBooks = await fetchBooks();
      setBooks(updatedBooks);
      setFilteredBooks(updatedBooks);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const modalContent = () => {
    return (
      <div>
        <div>
          <p>Title: {selectedBook?.title}</p>
          <p>Author: {selectedBook?.author}</p>
          <p>Year of Publication: {selectedBook?.publishedYear}</p>
          <p>Genre: {selectedBook?.genre}</p>
          <p>Stock: {selectedBook?.stock}</p>
        </div>
        {selectedBook?.stock > 0 && (
          <div>
            <button
              className="green-button"
              onClick={() => handleRequestBook(selectedBook?._id)}
            >
              Request book
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {userRole === 'librarian' && 
        <div className="add-button-container">
          <button
            className="add-button"
            onClick={() => setIsAddBookModalOpen(true)}
          >
            Add Book
          </button>
        </div>
      }

      <div className="input-container">
        <input
          type="text"
          placeholder="Search a book"
          className="input-field"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="blue-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year of Publication</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishedYear}</td>
              <td>{book.genre}</td>
              <td>
                <AiOutlineEdit className="edit-icon" onClick={() => {}} />
                <AiFillDelete className="delete-icon" onClick={() => {}} />
                <AiOutlineEye
                  className="view-icon"
                  onClick={() => openModal(book)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        titleBtn1="apartar"
        header="Book details"
        content={modalContent()}
        height={'view-modal'}
      />
      <BookModal
        isOpen={isAddBookModalOpen}
        onRequestClose={() => setIsAddBookModalOpen(false)}
        titleBtn1="Add Book"
        header="Add New Book"
        content={<AddBookForm onAddBook={handleAddBook} />} 
        height={'add-modal'}
      />
    </div>
  );
};

export default BookPage;
