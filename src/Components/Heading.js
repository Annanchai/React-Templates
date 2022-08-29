import React from "react";

const Heading = ({ title, content }) => {
  return (
    <div>
      <section className="heading text-center">
        <h2>{title}</h2>
        <p className="w-50 ms-auto me-auto">{content}</p>
      </section>
    </div>
  );
};

export default Heading;
