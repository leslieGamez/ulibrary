import React, { useState, useEffect } from 'react';
import { fetchRequestedBooks } from '../../api/bookApi';
import './style.css';

const RequestedBooks = () => {
  const [requestedBooks, setRequestedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRequestedBooksFromBackend = async () => {
      try {
        const data = await fetchRequestedBooks();
        setRequestedBooks(data);
        console.log(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchRequestedBooksFromBackend();
  }, []);

  const filteredRequestedBooks = requestedBooks.filter((requestedBook) => {
    const userFullName = `${requestedBook.userId.firstName} ${requestedBook.userId.lastName}`;
    return (
      userFullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      requestedBook.bookId.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="requested-books" style={{ width: '50%' }}>
      <h2>Requested Books</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search"
          className="input-field"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="blue-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Book Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequestedBooks.map((requestedBook, index) => (
            <tr key={index}>
              <td>{requestedBook.userId.firstName + ' ' + requestedBook.userId.lastName}</td>
              <td>{requestedBook.bookId.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestedBooks;
