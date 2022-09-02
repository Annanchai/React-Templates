import React from "react";
import "../Styles/Heading.css";

const Heading = ({ title, content, showContent }) => {
  return (
    <div className="heading">
      <section className="text-center">
        <h2>{title}</h2>
        {showContent ? <p className="w-50 ms-auto me-auto">{content}</p> : ""}
      </section>
    </div>
  );
};

export default Heading;
