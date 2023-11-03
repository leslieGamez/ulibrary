import React, { useState, useEffect } from 'react';
import { fetchUsers, addUser } from '../../api/userApi';
import './styles.css';
import { Button } from 'react-bootstrap'; 
import UserModal from '../../components/Modal'; 
import AddUserForm from './AddUserForm'; 
const UserList = ({userRole}) => {
  const [users, setUsers] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsersFromBackend = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchUsersFromBackend();
  }, []);

  const openUserModal = () => {
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  const handleAddUser = async (newUserData) => {
    try {
    console.log(newUserData)
      await addUser(newUserData);
      setIsUserModalOpen(false);
     
      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('User not added', error);
    }
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
         
          {userRole === 'librarian' && 
        <div className="add-button-container">
           <Button  className="add-button" onClick={openUserModal} variant="primary">Add User</Button>
        </div>
      }
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserModal
        isOpen={isUserModalOpen}
        onRequestClose={closeUserModal}
        content={<AddUserForm onAddUser={handleAddUser} />} 
        header="Add New Book"
        height={'add-modal'}
      />
    </div>
  );
};

export default UserList;
