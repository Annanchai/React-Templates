import React from "react";
import banner from "../Images/banner.webp";
import "../Styles/Home.css";
import { Button } from "react-bootstrap";

function Home(props) {
  return (
    <div>
      <section className="bannerContainer">
        <img className="banner" src={banner} />
        <div className="contentContainer">
          <h2>Headline that grabs people’s attention</h2>
          <Button className="btn-dark button mt-5">SHOP NOW</Button>
        </div>
      </section>
      <section className="featured text-center">
        <h3>Featured Collection</h3>
        <p>
          A powerful headline about your product’s features to give focus to
          your chosen product collection
        </p>
      </section>
    </div>
  );
}

export default Home;
