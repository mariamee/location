import React from "react";
import { Link } from "react-router-dom";
import { USERCIRCLE } from "utils/icons";

const LoginAdmin = () => {
  return (
    <div>
     <h3 className="text-primary my-5">Bienvenue à Votre Espace Administrateur</h3>
      <form className="border border-primary rounded p-5 w-50 mx-auto">
      <h1 className="text-primary my-5">Connexion</h1>
       <h6 className=" text-secondary my-5">Veuillez vous connecter pour accéder à votre compte ! </h6>
        <div className="my-5">
          <div className="position-relative">
            <div className="position-absolute" style={{top:"50%",left:"15px",transform:"translate(-50%, -50%)"}}>
          <USERCIRCLE/></div>
          <input
            className="form-control mt-3 ps-5"
            id="username"
            placeholder= "Votre username"
          />
        </div>
        </div>
        <div>
          <input
            className="form-control mt-3"
            id="password"
            type="password"
            placeholder="Votre password"
          />
        </div>
        <div className="text-center my-5">
          <button className="btn btn-primary shadow">Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
