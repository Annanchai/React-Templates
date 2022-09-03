import React from "react";
import Heading from "../Components/Heading";
import "../Styles/Contact.css";
import { Button } from "react-bootstrap";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../Components/Map";

function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="contact ms-auto me-auto">
      <Heading
        title={"Contact"}
        content="State the biggest use case of your product. Briefly expand on how this
  will help your customers."
      />
      <div className="mb-5">
        <Map />
      </div>
      <div className="d-flex gap-5">
        <form className="col-7">
          <h2 className="fs-1 fw-normal">Leave Us a Message</h2>
          <div className="d-flex gap-3 mt-5">
            <div className="w-100">
              <label className="fw-bold mb-2">
                Name <span className="text-danger">*</span>
              </label>
              <input className="d-block w-100 p-2" />
            </div>
            <div className="w-100">
              <label className="fw-bold mb-2">
                Email <span className="text-danger">*</span>
              </label>
              <input className="d-block p-2 w-100" />
            </div>
          </div>
          <label className="fw-bold mt-3 mb-2">
            Comment or Message <span className="text-danger">*</span>
          </label>
          <textarea className="d-block p-2 w-100" rows={10} />
          <Button className="btn-dark rounded-0 pt-3 pb-3 ps-4 pe-4 mt-3 mb-5">
            Send Message
          </Button>
        </form>
        <div>
          <h2 className="fs-1 fw-normal">Our Store</h2>
          <p className="mt-4">
            Avenida República 17, Lisboa 1950-103, Portugal
          </p>
          <h3 className="fs-5 mt-5">Phone:</h3>
          <p>+351 968757017</p>
          <h3 className="fs-5 mt-5">Email:</h3>
          <p>shajeesh@ymail.com</p>
          <h3 className="fs-3 mt-5">Store Hours</h3>
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM - 5:30 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
