import React from 'react';
import Modal from 'react-modal';
import './style.css'; 

const CustomModal = ({ book, isOpen, onRequestClose ,height, header, content}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Details"
      className={`custom-modal ${height}`}
      overlayClassName="custom-overlay"
      style={{height}}
    >
          <h2>{ header}</h2>
          {content} 
              <div className='div-closebtn'>
              <button onClick={onRequestClose} className="close-button">
          Close
        </button>
       </div>
     
    </Modal>
  );
};

export default CustomModal;
