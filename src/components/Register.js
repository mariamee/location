import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import { CITIES } from "../utils/constants";

const Register = () => {
  return (
    <div>
      <h1 className="text-center">S'inscrire</h1>
      <form className="border border-dark  rounded p-4">
        <p className="text-danger small">
          <small>remplir sligneusement les informations suivantes:</small>
        </p>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="lname">Nom</label>
            <input
              className="form-control"
              id="lname"
              placeholder="Votre nom"
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="fname">Prénom</label>
            <input
              className="form-control"
              id="fname"
              placeholder="Votre prénom"
            />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              placeholder="Votre Email"
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="tel">Téléphone</label>
            <input
              className="form-control"
              id="tel"
              placeholder="Votre numéro de téléphone"
            />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Votre Password"
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="ville">Ville</label>
            <Select options={CITIES} />
          </div>
        </div>
        <div className="text-center pt-5">
          <button type="submit" className="btn btn-success">
            Créer mon compte
          </button>
          <div className="my-4">
            Vous avez déjà un compte? <Link to="/login">se connecter</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
