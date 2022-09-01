import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../Styles/ProductPage.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../Variables/data";
import { Counter, dec, inc } from "../Components/Counter";

const ProductPage = () => {
  let { id } = useParams();
  let Product = getProduct(parseInt(id, 10));
  const salePrice = Math.round(
    Product.price - (Product.price * Product.discount) / 100
  );
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(true);
  return (
    <div className="productPage w-75 ms-auto me-auto mt-5 mb-5">
      <div className="d-flex gap-1">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/shop">Shop</a>
        <span>/</span>
        <p>{Product.title}</p>
      </div>
      <section className="product d-flex row-cols-2">
        <div className="d-flex gap-3">
          <div className="variants">
            <img src={"../" + Product.image} alt="product" />
          </div>
          <img className="w-75" src={"../" + Product.image} alt="product" />
        </div>
        <div className="">
          <h2>{Product.title}</h2>
          <div className="d-flex">
            {Product.discount > 0 ? (
              <p className="salePrice fs-3">${Product.price}.00</p>
            ) : (
              <p className="price fs-3">${Product.price}.00</p>
            )}
            {Product.discount > 0 ? (
              <p className="price fs-3">${salePrice}.00</p>
            ) : (
              ""
            )}
          </div>
          <p className="fs-5">{Product.description}</p>
          <div className="border-bottom d-flex justify-content-between align-items-center pb-4">
            <Counter
              count={count}
              dec={() => dec(count, setCount)}
              inc={() => inc(count, setCount)}
            />
            <Button className="btn-dark rounded-0 pt-3 pb-3 ps-4 pe-4 col-7">
              ADD TO CART
            </Button>
          </div>
          <p className="mt-3">CATEGORY: Cosmetics</p>
        </div>
      </section>
      <section>
        <div className="d-flex gap-4 mt-5 border-bottom">
          <p onClick={() => setActive(true)} className="cursor-pointer fs-5">
            Description
          </p>
          <p onClick={() => setActive(false)} className="cursor-pointer fs-5">
            Reviews (0)
          </p>
        </div>
        {active ? (
          <div className="mt-4 mb-4">
            <p>{Product.detailDesc}</p>
          </div>
        ) : (
          <div>Reviews</div>
        )}
      </section>
    </div>
  );
};

export default ProductPage;
