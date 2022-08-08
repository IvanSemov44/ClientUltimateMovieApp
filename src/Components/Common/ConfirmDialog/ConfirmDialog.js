import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmDialog = ({
  show,
  onClose,
  saveChanges
}) => {
  return (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={saveChanges}>Save changes</Button>
        </Modal.Footer>
    </Modal>
  );

}

export default ConfirmDialog;