import React from "react";
import "../Styles/ViewModal.css";
import { Button } from "react-bootstrap";
import { Counter } from "./Counter";

const ViewModal = ({
  open,
  sale,
  price,
  salePrice,
  close,
  image,
  title,
  count,
  dec,
  inc,
}) => {
  if (!open) return null;
  return (
    <div onClick={close} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer d-flex justify-content-center p-4 gap-5"
      >
        <div className="imageContainer col-5">
          <img className="mb-3" src={image} alt="product" />
          {sale ? <span className="badge bg-dark badge-sale">SALE!</span> : ""}
          <div className="variants d-flex gap-3">
            <img src={image} alt="product" />
          </div>
        </div>
        <div className="content col-5 text-start">
          <h2>{title}</h2>
          <div className="d-flex justify-content-center">
            {sale ? (
              <p className="salePrice">${price}.00</p>
            ) : (
              <p className="price">${price}.00</p>
            )}
            {sale ? <p className="price">${salePrice}.00</p> : ""}
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus
            congue nisi.
          </p>
          <div className="border-bottom d-flex justify-content-between align-items-center pb-4">
            <Counter count={count} dec={dec} inc={inc} />
            <Button className="btn-dark rounded-0 pt-3 pb-3 ps-4 pe-4 col-7">
              ADD TO CART
            </Button>
          </div>
          <p className="mt-3">CATEGORY: Cosmetics</p>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
