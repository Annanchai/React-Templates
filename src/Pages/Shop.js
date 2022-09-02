import React from "react";
import Heading from "../Components/Heading";
import Product from "../Components/Product";
import "../Styles/Shop.css";
import { Products } from "../Variables/data";

function Shop() {
  return (
    <div className="shop ms-auto me-auto">
      <Heading
        title="Shop"
        content="State the biggest use case of your product. Briefly expand on how this
          will help your customers."
      />
      <section className="products d-flex flex-wrap">
        {Products.map((item) => {
          const salePrice = Math.round(
            item.price - (item.price * item.discount) / 100
          );
          return (
            <Product
              image={item.image}
              sale={item.discount > 0 ? true : false}
              title={item.title}
              price={item.price}
              salePrice={salePrice}
              slug={`/shop/${item.id}`}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Shop;
