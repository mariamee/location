import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";


const PartnerHome = () => {
  return (
  <div><form className="border border-secondary shadow rounded p-2 mx-auto w-50">
      <div className="pt-2 pb-2 text-center h5">Mon profil</div>
      <div className="my-5 d-flex pe-5 ps-5 ">
          <input
            className="form-control mt-0 ms-2 "
            id="name"
            placeholder="Votre Nom"
          />

        </div>
        <div className="my-5 d-flex pt-0  pe-5 ps-5">
          <input
            className="form-control mt-3 "
            id="firstname"
            placeholder="Votre Prénom"
          />
        </div>

        <div className="my-5 d-flex pt-0  pe-5 ps-5">
          <input
            className="form-control mt-3 "
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="my-5 d-flex pt-0  pe-5 ps-5">
          <input
            className="form-control mt-3 "
            id="email"
            placeholder="Adresse e-mail"
          />
          </div>
        <div className="text-center h6">Mon Domicile</div>  
        <div className="my-5 d-flex pt-0  pe-5 ps-5">
          <input
            className="form-control mt-3 "
            id="adress"
            placeholder="Votre Adresse"
          />
          </div>
          <div className="my-5 d-flex pt-0  pe-5 ps-5">
          <input
            className="form-control mt-3 p-25"
            id="bio"
            placeholder="Qui suis-je ?"
          /> ù
          </div>
          <div className="text-center pt-0 pb-2">
          <button type="submit" className="btn btn-success">
            Enregistrer
          </button>
          </div>
        </form>
        </div>
  );
};

export default PartnerHome; 
