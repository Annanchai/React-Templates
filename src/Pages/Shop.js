import React from "react";
import Product from "../Components/Product";
import "../Styles/Shop.css";
import Products from "../Variables/data";

function Shop(props) {
  return (
    <div className="shop ms-auto me-auto">
      <section className="heading text-center">
        <h2>Shop</h2>
        <p className="w-50 ms-auto me-auto">
          State the biggest use case of your product. Briefly expand on how this
          will help your customers.
        </p>
      </section>
      <section className="products d-flex flex-wrap">
        {Products.map((item) => {
          const salePrice = Math.round((item.price * item.discount) / 100);
          return (
            <Product
              image={item.image}
              sale={item.discount > 0 ? true : false}
              title={item.title}
              price={item.price}
              salePrice={salePrice}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Shop;
