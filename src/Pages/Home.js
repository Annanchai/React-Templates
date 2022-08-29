import React from "react";
import "../Styles/Home.css";
import { Button, Card } from "react-bootstrap";
import Product from "../Components/Product";
import Products from "../Variables/data";
import ViewModal from "../Components/ViewModal";

const categories = [
  ["Makeup", "Images/makeup.jpg"],
  ["Lipstick", "Images/lipstick.jpg"],
  ["Bath", "Images/bath.jpg"],
  ["Treatments", "Images/treatments.jpg"],
];

function Home() {
  const FeaturedProducts = Products.filter((item) => item.featured === true);
  return (
    <div>
      <section className="bannerContainer">
        <img className="banner" src="Images/banner.webp" alt="banner" />
        <div className="contentContainer">
          <h2>Headline that grabs people’s attention</h2>
          <Button href="/shop" className="btn-dark button mt-5">
            SHOP NOW
          </Button>
        </div>
      </section>
      <section className="featured text-center">
        <h3>Featured Collection</h3>
        <p>
          A powerful headline about your product’s features to give focus to
          your chosen product collection
        </p>
        <div className="d-flex justify-content-around mt-5">
          {FeaturedProducts.map((item) => {
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
        </div>
      </section>
      <section className="highlight">
        <img src="Images/highlight.webp" alt="highlight" />
        <div className="highlightContent text-center">
          <h3>Highlighted Section</h3>
          <p>
            What differentiates you from the competition? Use this section to
            talk about it. Don’t forget to talk about the benefits.
          </p>
          <Button href="/shop" className="btn-dark button mt-5">
            SHOP NOW
          </Button>
        </div>
      </section>
      <section className="categories text-center">
        <h3>Featured Categories</h3>
        <p>
          Give your customers insight into your product collection. Select
          imagery and name that relates to the product category.
        </p>
        <div className="d-flex justify-content-around">
          {categories.map((item) => {
            return (
              <Card className="card">
                <a href="/shop">
                  <Card.Img variant="top" src={item[1]} />
                </a>
                <Card.Body>
                  <Card.Link href="/shop">{item[0]}</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </section>
      <ViewModal />
    </div>
  );
}

export default Home;
