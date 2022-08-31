import React from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../Variables/data";
import "../Styles/BlogPage.css";

const BlogPage = () => {
  let { id } = useParams();
  let blog = getBlog(parseInt(id, 10));
  return (
    <div className="blogContainer ms-auto me-auto">
      <div className="text-center">
        <p>{blog.date}</p>
        <p className="fs-2 w-50 ms-auto me-auto mb-4">{blog.title}</p>
        <img src={"../" + blog.images[0]} alt="blog" />
      </div>
      <div className="blogContent w-75 ms-auto me-auto mb-5 pb-4">
        <p className="mt-5 mb-5 description">{blog.description}</p>
        <img src={"../" + blog.images[1]} alt="content" />
        <p className="fs-2">{blog.subTitle}</p>
        <p className="description">{blog.content}</p>
        <div className="d-flex row-cols-2 gap-4">
          <img src={"../" + blog.images[2]} alt="content" />
          <img src={"../" + blog.images[3]} alt="content" />
        </div>
        <p className="description">{blog.subContent}</p>
        <p className="fs-2 ms-5 quote">{blog.quote}</p>
        <p className="ms-5">{blog.quoteAuthor}</p>
        <p className="description">{blog.footer}</p>
      </div>
    </div>
  );
};

export default BlogPage;
