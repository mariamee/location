import React from "react";
import { POSTS } from "../../utils/constants";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>A louer</h2>
      <div className="d-flex flex-wrap">
        {POSTS?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
