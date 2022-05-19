import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { onConnect } from "services/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const isConnected = await onConnect(email, password);
    if (isConnected) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-center my-5">Connexion</h1>
      <form className="border border-dark rounded p-5 w-50 mx-auto">
        <div className="my-5">
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mt-3"
            id="email"
            placeholder="Votre Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mt-3"
            id="password"
            type="password"
            placeholder="Votre password"
          />
        </div>
        <div className="text-center my-5">
          <button
            onClick={onSubmit}
            type="submit"
            className="btn btn-primary shadow"
          >
            Se connecter
          </button>
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
