import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-start align-items-center p-2 shadow bg-light ">
      <div className="me-auto d-flex align-items-center">
        <Link to="/" className="text-decoration-none text-black h3 my-2">
         LocationApp
        </Link>
      </div>
      <div>
        <Link to="login">
          <button className="btn btn-outline-primary me-2">Se connecter</button>
        </Link>
        <Link to="register">
          <button className="btn btn-outline-danger">S'inscrire</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
