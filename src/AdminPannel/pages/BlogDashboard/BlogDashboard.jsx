import React, { useEffect, useState } from "react";
import "./BlogDashboard.scss";
import Button from "../../../components/Button/Button";
import { usePostBlogMutation } from "../../../features/Blog/BlogApi";
import Modal from "../../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  modalOpen,
} from "../../../features/cartHandler/cartHandler";
import BlogTable from "../../components/BlogTable/BlogTable";

const BlogDashboard = () => {
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [postBlog, { isLoading, isError, isSuccess }] = usePostBlogMutation();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cartHandler);

  const { modalCondition } = selector || {};
  console.log(modalCondition);

  useEffect(() => {
    if (isSuccess) {
      setHeading("")
      setParagraph("")
      setImage("")
      dispatch(modalOpen);
    }
  }, [isSuccess, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog({ heading, paragraph, image });
    dispatch(modalOpen())
  };

  return (
    <div className="BlogDashboard">
      {modalCondition && <Modal></Modal>}
      <div className="container">
        <h1>Create Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              id="text"
              required
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="text"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="article">Article</label>
            <textarea
              type="text"
              rows={6}
              required
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
      <BlogTable></BlogTable>
    </div>
  );
};

export default BlogDashboard;
