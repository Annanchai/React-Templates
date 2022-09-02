import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../Styles/ProductPage.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../Variables/data";
import { Counter, dec, inc } from "../Components/Counter";
import Rating from "../Components/Rating";
import { Products } from "../Variables/data";
import ProductComponent from "../Components/Product";
const ProductPage = () => {
  let { id } = useParams();
  let Product = getProduct(parseInt(id, 10));
  const salePrice = Math.round(
    Product.price - (Product.price * Product.discount) / 100
  );
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(true);
  const [rate, setRate] = useState(1);

  const starUnclick1 = () => {
    setRate(1);
  };
  const starClick2 = () => {
    setRate(2);
  };
  const starUnClick2 = () => {
    if (rate === 2) {
      setRate(1);
    } else setRate(2);
  };
  const starClick3 = () => {
    setRate(3);
  };
  const starUnClick3 = () => {
    if (rate === 3) {
      setRate(2);
    } else setRate(3);
  };
  const starClick4 = () => {
    setRate(4);
  };
  const starUnClick4 = () => {
    if (rate === 4) {
      setRate(3);
    } else setRate(4);
  };
  const starClick5 = () => {
    setRate(5);
  };
  const starUnClick5 = () => {
    setRate(4);
  };
  return (
    <div className="productPage ms-auto me-auto mt-5 mb-5">
      <div className="d-flex gap-1">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/shop">Shop</a>
        <span>/</span>
        <p>{Product.title}</p>
      </div>
      <section className="product d-flex">
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
        <div className="d-flex mt-5 border-bottom">
          {active ? (
            <p
              onClick={() => setActive(true)}
              className="border-bottom border-dark border-2 cursor-pointer mb-0 p-3 fs-5"
            >
              Description
            </p>
          ) : (
            <p
              onClick={() => setActive(true)}
              className="cursor-pointer mb-0 p-3 fs-5"
            >
              Description
            </p>
          )}

          {!active ? (
            <p
              onClick={() => setActive(false)}
              className="border-bottom border-dark border-2 cursor-pointer mb-0 p-3 fs-5"
            >
              Reviews (0)
            </p>
          ) : (
            <p
              onClick={() => setActive(false)}
              className="cursor-pointer mb-0 p-3 fs-5"
            >
              Reviews (0)
            </p>
          )}
        </div>
        {active ? (
          <div className="mt-4 mb-4 fs-5">
            <p>{Product.detailDesc}</p>
          </div>
        ) : (
          <div>
            {Product.reviews.length === 0 ? (
              <p className="reviews p-3 mt-3 mb-3 fs-5">
                There are no reviews yet.
              </p>
            ) : (
              ""
            )}
            <div className="formContainer p-5">
              {Product.reviews.length === 0 ? (
                <div>
                  <p className="fs-5 fw-bold mb-1">
                    Be the first one to review "{Product.title}"
                  </p>
                  <p className="fs-5">
                    Your email address will not be published. Required fields
                    are marked <span className="text-danger fs-5">*</span>
                  </p>
                </div>
              ) : (
                ""
              )}
              <p className="fs-5">
                Your rating <span className="text-danger">*</span>
              </p>
              <Rating
                rate={rate}
                starUnclick1={starUnclick1}
                starClick2={starClick2}
                starUnClick2={starUnClick2}
                starClick3={starClick3}
                starUnClick3={starUnClick3}
                starClick4={starClick4}
                starUnClick4={starUnClick4}
                starClick5={starClick5}
                starUnClick5={starUnClick5}
              />
              <label for="review" className="fs-5 mt-5">
                Your review <span className="text-danger">*</span>
              </label>
              <textarea
                id="review"
                name="review"
                className="d-block w-100 rounded-0"
                rows={10}
              />
              <label for="name" className="fs-5 mt-4">
                Name <span className="text-danger">*</span>
              </label>
              <input className="d-block w-100 p-3" name="name" id="name" />
              <label for="email" className="fs-5 mt-4">
                Email <span className="text-danger">*</span>
              </label>
              <input className="d-block w-100 p-3" name="email" id="email" />
              <Button
                type="submit"
                className="btn-dark rounded-0 mt-4 pt-3 pb-3 ps-4 pe-4"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        )}
      </section>
      <section>
        <h2 className="mb-5 mt-5 pb-5 w-100 border-bottom fs-1 fw-normal">
          Related Products
        </h2>
        <div className="d-flex justify-content-between mt-5">
          {Products.filter((item) => item.categories === Product.categories)
            .slice(0, 3)
            .map((item) => {
              return (
                // <div className="text-center">
                //   <img
                //     className="w-100"
                //     src={"../" + item.image}
                //     alt="product"
                //   />
                //   <p>{item.title}</p>
                // </div>
                <ProductComponent
                  image={"../" + item.image}
                  sale={item.discount > 0 ? true : false}
                  title={item.title}
                  price={item.price}
                  salePrice={salePrice}
                  slug={`/shop/${item.id}`}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
