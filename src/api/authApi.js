import axios from 'axios';

const API_URL = 'http://localhost:3088/api';

const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);

    if (response.status === 200) {
      const data = response.data;
 
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.userRole);
      localStorage.setItem('userId', data.userId);
      window.location.href = '/books';
    } else {
  
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export { login };
