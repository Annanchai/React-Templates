import React, { useState } from "react";
import "../Styles/Product.css";
import { Button } from "react-bootstrap";
import ViewModal from "./ViewModal";
import { dec, inc } from "../Components/Counter";

const Product = ({ title, sale, price, image, salePrice, slug }) => {
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <div className="productContainer">
      <div>
        <img src={image} alt="product" />
        {sale ? <span className="badge bg-dark badge-sale">SALE!</span> : ""}

        <Button
          onClick={() => setOpenModal(true)}
          className="button button-view btn-dark"
        >
          Quick View
        </Button>
      </div>
      <div className="text-center">
        <a href={slug}>{title}</a>
        <div className="d-flex justify-content-center">
          {sale ? (
            <p className="salePrice">${price}.00</p>
          ) : (
            <p className="price">${price}.00</p>
          )}
          {sale ? <p className="price">${salePrice}.00</p> : ""}
        </div>
        <Button className="cartButton btn-dark">ADD TO CART</Button>
      </div>
      <ViewModal
        open={openModal}
        sale={sale}
        price={price}
        salePrice={salePrice}
        close={() => setOpenModal(false)}
        image={image}
        title={title}
        count={count}
        dec={() => dec(count, setCount)}
        inc={() => inc(count, setCount)}
      />
    </div>
  );
};

export default Product;
