import axios from 'axios';

const API_URL = 'http://localhost:3088/api';


const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const requestBook = async (bookId, userId) => {
  try {
    const response = await axios.post(`${API_URL}/requested-books`, { bookId, userId });
    return response.data;
  } catch (error) {
    throw new Error('Error requesting the book: ' + error.message);
  }
};

const fetchRequestedBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/requested-user-books`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addBook = async (newBookData) => {
  try {
    const response = await axios.post(`${API_URL}/books`, newBookData);
    console.log('Book added successfully');
  } catch (error) {
    console.error('Error adding the book: ' + error.message);
  }
};

export { addBook, fetchRequestedBooks, requestBook, fetchBooks };
