import React from "react";
import { useParams } from "react-router-dom";
import { getBlog, Blogs } from "../Variables/data";
import "../Styles/BlogPage.css";
import { Button } from "react-bootstrap";

const BlogPage = () => {
  let { id } = useParams();
  let blog = getBlog(parseInt(id, 10));
  let idValue = parseInt(id, 10);
  let nextBlog = getBlog(parseInt(id, 10) + 1);
  let previousBlog = getBlog(parseInt(id, 10) - 1);
  return (
    <div className="blogPage ms-auto me-auto">
      <div className="text-center">
        <p>{blog.date}</p>
        <p className="fs-2 w-50 ms-auto me-auto mb-4">{blog.title}</p>
        <img className="mw-100" src={"../" + blog.images[0]} alt="blog" />
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
      <div className="w-75 ms-auto me-auto">
        {idValue !== Blogs.length && idValue > 1 ? (
          <div className="d-flex justify-content-center gap-4 fs-5 mb-5">
            <a href={`/blog/${previousBlog.id}`}>
              Previous: {previousBlog.title}
            </a>
            <a href={`/blog/${nextBlog.id}`}>Next: {nextBlog.title}</a>
          </div>
        ) : idValue === 1 ? (
          <div className="d-flex justify-content-center fs-5 mb-5">
            <a href={`/blog/${nextBlog.id}`}>Next: {nextBlog.title}</a>
          </div>
        ) : idValue === Blogs.length ? (
          <div className="d-flex justify-content-center fs-5 mb-5">
            <a href={`/blog/${previousBlog.id}`}>
              Previous: {previousBlog.title}
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <form method="post" className="w-75 ms-auto me-auto p-5 mb-5">
        <h4 className="fs-1 fw-normal">Leave a Reply</h4>
        <p className="fs-5 mt-3">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-danger">*</span>
        </p>
        <label className="fs-5" for="comment">
          Comment <span className="text-danger">*</span>
        </label>
        <textarea
          className="d-block w-100 rounded-0 p-3"
          id="comment"
          rows={10}
          required
        />
        <label className="fs-5 mt-4" for="name">
          Name <span className="text-danger">*</span>
        </label>
        <input
          className="d-block w-100 p-3"
          type={"text"}
          id="name"
          name="name"
          required
        />
        <label className="fs-5 mt-4" for="email">
          Email <span className="text-danger">*</span>
        </label>
        <input
          className="d-block w-100 p-3"
          type={"text"}
          id="email"
          name="email"
          required
        />
        <label className="fs-5 mt-4" for="website">
          Website
        </label>
        <input
          className="d-block w-100 p-3"
          type={"text"}
          id="website"
          name="website"
        />
        <Button
          type="submit"
          className="btn-dark rounded-0 mt-4 pt-3 pb-3 ps-4 pe-4"
        >
          POST COMMENT
        </Button>
      </form>
    </div>
  );
};

export default BlogPage;
