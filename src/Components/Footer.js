import React from "react";
import "../Styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-5 pb-5 ">
      <div className="linksContainer d-flex justify-content-between ms-auto me-auto">
        <div>
          <h1>BEAUMONT</h1>
          <p>Give your customers insight into your product collection.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
            <a href="/shop">
              <li>Shop</li>
            </a>
          </ul>
        </div>
        <div className="about">
          <h4>About</h4>
          <ul>
            <a href="/">
              <li>Shipping</li>
            </a>
            <a href="/">
              <li>Terms</li>
            </a>
            <a href="/">
              <li>Policy</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="socialIconsContainer d-flex justify-content-between ms-auto me-auto mt-5">
        <div className="d-flex col-2 justify-content-between">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="socialIcons " />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="socialIcons" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="socialIcons" />
          </a>
        </div>
        <div>
          <p>
            © 2022 Beaumont. Proudly powered by{" "}
            <a
              href="https://www.anvicodes.com/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              AnviCodes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
