import React from 'react';
import { AiOutlineBook } from 'react-icons/ai'; 
import './styles.css'; 

const TopBar = () => {
  const logout = () => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
   
    window.location.href = '/login';
  };
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <AiOutlineBook className="book-icon" /> 
      </div>
      <div className="top-bar-right">
        <button className="logout-button" onClick={()=>logout()}>Log out</button>
      </div>
    </div>
  );
};

export default TopBar;
