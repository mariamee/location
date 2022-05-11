import React from "react";
import { POSTS } from "../../utils/constants";
import Preview from "./Preview";

const Previews = () => {
  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>A louer</h2>
      <div className="d-flex flex-wrap">
        {POSTS?.map((post) => (
          <Preview key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Previews;
