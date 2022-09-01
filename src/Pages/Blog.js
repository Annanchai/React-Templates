import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../Components/Heading";
import { Blogs } from "../Variables/data";
import "../Styles/Blog.css";

function Blog() {
  return (
    <div className="blog">
      <Heading
        title={"Blog"}
        content="State the biggest use case of your product. Briefly expand on how this
          will help your customers."
      />
      <div className="d-flex flex-wrap p-5">
        {Blogs.map((item) => {
          return (
            <div key={item.id} className="col-4 p-3 text-center">
              <a href={`/blog/${item.id}`}>
                <img src={item.images[0]} alt="blog" />
              </a>
              <p className="text-secondary mt-2">{item.date}</p>
              <p className="fs-5">{item.title}</p>
              <p className="content p-1">{item.description}</p>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default Blog;
