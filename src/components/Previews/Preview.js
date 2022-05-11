import React from "react";
import { Link } from "react-router-dom";

import { HEART_ICON } from "utils/icons";

const Preview = ({ title, price, img, id }) => {
  return (
    <Link to={`/post/${id}`} className="ms-2">
      <div
        type="button"
        className="mx-2 border border-dark rounded-3 px-3 pt-3 m-2 bg-light shadow"
      >
        <div className="position-relative">
          <img
            src={img}
            alt={title}
            className="card-img-top border border-2 border-dark rounded-3"
            style={{ width: "10rem", height: "10rem" }}
          />
          <div className="position-absolute top-0 end-0">
            <HEART_ICON className="bg-primary" />
          </div>
        </div>
        <div class="card-body text-center">
          <p class="card-text h2">{price}</p>
          <p class="card-text">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Preview;
