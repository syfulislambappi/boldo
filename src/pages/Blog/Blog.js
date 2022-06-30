import React from "react";
import * as blog from "../../components";

const Blog = () => {
  return (
    <>
      <blog.BlogHeader />
      <blog.Blogs blog={true} />
    </>
  );
};

export default Blog;
