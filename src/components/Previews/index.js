import React from "react";
import Preview from "./Preview";

const Previews = ({ previews = [] }) => {
  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>A louer</h2>
      <div className="d-flex flex-wrap">
        {previews?.map((post) => (
          <Preview key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Previews;
