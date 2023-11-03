import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import TopBar from './components/TopBar'; 
import SideBar from './components/SideBar'; 
import BooksPage from './pages/Books';
import RequestedBooks from './pages/RequestBooks';
import UserList from './pages/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserRole = localStorage.getItem('userRole');
    const storedUserId = localStorage.getItem('userId');

    if (storedToken) {
      setToken(storedToken);
      setUserRole(storedUserRole);
      setUserId(storedUserId);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
      <ToastContainer />
        {token && <TopBar userRole={userRole} userId={userId} />}
        <div className="content">
          {token && <SideBar userRole={userRole} userId={userId} />}
          <div className="main-content">
            <Routes>
              {token ? (
                <>
                  <Route path="/books" element={<BooksPage userRole={userRole} userId={userId} />} />
                  <Route path="/requestedBooks" element={<RequestedBooks userRole={userRole} userId={userId} />} />
                  <Route path="/users" element={<UserList userRole={userRole} userId={userId} />} />
                </>
              ) : (
                <Route path="/login" element={<LoginPage />} />
              )}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
