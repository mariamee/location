import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();

  const data = useAuth();
  const role = data?.role;
  const user = data?.user;

  const logout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-start align-items-center p-2 shadow bg-light ">
      <div className="me-auto d-flex align-items-center">
        <Link to="/" className="text-decoration-none text-black h3 my-2">
          LocationApp
        </Link>
      </div>
      {user && (
        <div>
          <span className="h4 me-2 text-primary">{user.name}</span>
          <small>{role?.role || ""}</small>
          <button onClick={logout} className="btn btn-danger btn-sm ms-2">
            log out
          </button>
        </div>
      )}
      {!user && (
        <div>
          <Link to="login">
            <button className="btn btn-outline-primary me-2">
              Se connecter
            </button>
          </Link>
          <Link to="register">
            <button className="btn btn-outline-danger">S'inscrire</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
