import React from "react";
import "../Styles/Product.css";
import { Button } from "react-bootstrap";

const Product = ({ title, sale, price, image, salePrice }) => {
  return (
    <div className="productContainer">
      <div>
        <img src={image} alt="product" />
        {sale ? <span className="badge bg-dark badge-sale">SALE!</span> : ""}

        <Button className="button button-view btn-dark">Quick View</Button>
      </div>
      <div className="text-center">
        <a href="/">{title}</a>
        <div className="d-flex justify-content-center">
          {sale ? <p>${salePrice}</p> : ""}

          <p>${price}</p>
        </div>
        <Button className="cartButton btn-dark">ADD TO CART</Button>
      </div>
    </div>
  );
};

export default Product;
