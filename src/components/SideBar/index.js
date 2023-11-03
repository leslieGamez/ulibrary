import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SideBar = ({ userRole }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>ULibrary</span>
      </div>
      <div className="sidebar-menu">
        <Link to="/books" className="sidebar-link">
          Books
        </Link>
        {userRole === 'librarian' && (
          <>
            <Link to="/requestedBooks" className="sidebar-link">
              Requested Books
            </Link>
            <Link to="/users" className="sidebar-link">
              Users
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
