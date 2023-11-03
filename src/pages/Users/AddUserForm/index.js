import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUserForm = ({ onAddUser, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
      role: '',
      password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
  };

  return (
      <Form onSubmit={handleSubmit}>
          <div className='form'>
          <Form.Group controlId="firstName">
        <Form.Label className="custom-form-label">First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
                  onChange={handleChange}
                  className="custom-form-control"
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label className="custom-form-label">Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
                  onChange={handleChange}
                  className="custom-form-control"
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label className="custom-form-label">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
                  onChange={handleChange}
                  className="custom-form-control"
        />
              </Form.Group>
              <Form.Group controlId="password">
        <Form.Label className="custom-form-label">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
                  onChange={handleChange}
                  className="custom-form-control"
        />
      </Form.Group>
      <Form.Group controlId="role">
        <Form.Label style={{width:'100px'}}  className="custom-form-label">Role</Form.Label>
        <Form.Control
          as="select"
          name="role"
          value={formData.role}
                  onChange={handleChange}
                      className="custom-form-control select"
                      style={{width:'324px'}}
        >
          <option value="">Select Role</option>
          <option value="librarian">Librarian</option>
          <option value="student">Student</option>
        </Form.Control>
      </Form.Group>
      <Button style={{ marginTop: '20px', marginLeft:'10px' }} variant="primary" type="submit">
        Add User
      </Button>
          </div>
  
    </Form>
  );
};

export default AddUserForm;
