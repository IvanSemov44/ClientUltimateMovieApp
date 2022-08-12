import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../ConfirmDialog/ConfirmDialog.css"

const ConfirmDialog = ({
  show,
  onClose,
  saveChanges
}) => {
  return (
    <Modal show={show} onHide={onClose} >
      <Modal.Body className="view-btn" >
        <p>Are you sure?</p>
        <Button variant="outline-danger" onClick={onClose}>Close</Button>
        <Button variant="outline-success" onClick={saveChanges}>Save changes</Button>
      </Modal.Body>
    </Modal>
  );

}

export default ConfirmDialog;