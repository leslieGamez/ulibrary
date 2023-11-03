import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css'; 

const AddBookForm = ({ onAddBook, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formData);
  };

  return (
    <Form  onSubmit={handleSubmit}>
      <div className='form'>
      <Form.Group>
        <Form.Label className="custom-form-label">Title</Form.Label>
        <Form.Control
          className="custom-form-control"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="custom-form-label">Author</Form.Label>
        <Form.Control
          className="custom-form-control"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="custom-form-label">Year of Publication</Form.Label>
        <Form.Control
          className="custom-form-control"
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="custom-form-label">Genre</Form.Label>
        <Form.Control
          className="custom-form-control"
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="custom-form-label">Stock</Form.Label>
        <Form.Control
          className="custom-form-control"
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </Form.Group>
      <Button style={{ marginTop: '20px' ,marginLeft:'10px'}} variant="primary" type="submit">
        Add Book
      </Button>
      </div>
     
    </Form>
  );
};

export default AddBookForm;
