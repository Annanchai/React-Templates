import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import "../Styles/NavBar.css";
import "../Styles/SearchModal.css";
import { BsX, BsCart2, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const SearchModal = ({ show, handleClose }) => {
  return (
    <div className="searchModal">
      <Modal
        show={show}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModalBody>
          <nav>
            <div className="d-flex justify-content-between align-items-center  mt-4 ms-3 me-4">
              <ul className="d-flex justify-content-around col-4">
                <li>Home</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
              <h1 className="col-4 text-center">BEAUMONT</h1>
              <div className="iconContainer col-4 text-end">
                <BsX
                  onClick={handleClose}
                  className="icon"
                  style={{ fontSize: "40px" }}
                />
                <BiUser className="icon" />
                <BsCart2 className="icon" />
              </div>
            </div>
          </nav>
          <div className="searchBar text-center p-3 d-flex justify-content-center align-items-center  mt-3 mb-2 ms-auto me-auto">
            <input className="me-2 w-75" />
            <BsSearch className="icon" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SearchModal;
