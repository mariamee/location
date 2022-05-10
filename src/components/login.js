import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="text-center my-5">Connexion</h1>
      <form className="border border-dark rounded p-5 w-50 mx-auto">
        <div className="my-5">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control mt-3"
            id="email"
            placeholder="Votre Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control mt-3"
            id="password"
            type="password"
            placeholder="Votre password"
          />
        </div>
        <div className="text-center my-5">
          <button className="btn btn-primary shadow">Se connecter</button>
          <p className="pt-5">
            Pas encore inscrit ?
            <Link to="/register" className="ms-2">
              s'inscrire gratuitement
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
