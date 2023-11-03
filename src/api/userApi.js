import axios from 'axios';

const API_URL = 'http://localhost:3088/api';

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { addUser, fetchUsers };
