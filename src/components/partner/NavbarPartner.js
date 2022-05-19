import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
const NavbarPartner = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <nav class="  d-flex  p-2 ml-2 shadow navbar navbar-expand-xl navbar-light bg-warning ">
      <div class="container-fluid h6 justify-content-start">
        <div className="dd">
          <a class="navbar-brand" href="#">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" />
            Mon Profil
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="myadvert">
                Mes Annonces
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mymessages">
                Mes Messages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="myrequests">
                Mes Demandes
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="mycomments">
                Commentaires
              </a>
            </li>

            <li class="d-flex">
              <button
                class="d-flex nav-link btn btn-outline btn-danger btn-sm"
                onClick={logout}
              >
                Se déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarPartner;
