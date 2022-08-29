import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import Products from "../Variables/data";
import "../Styles/ViewModal.css";

const ViewModal = () => {
  return (
    <div>
      <Modal show={true}>
        <ModalBody>
          <div>
            <img src="Images/id1.jpg" alt="product" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewModal;
