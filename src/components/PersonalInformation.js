import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { CITIES } from "../utils/constants";
import { HEART_ICON, LOCATIONS, MESSAGES } from "../utils/icons";

const PersonalInformation = () => {
  return (
    <div className="p-5 py-5">
      <form className="border border-dark p mb-5 h5 d-flex justify-content-around">
    <div className="text-center"><HEART_ICON size={65}/>
     <div>Messages</div> 
    </div>
    <div className="text-center"><MESSAGES/>
     <div>Liste d'envies</div> 
    </div>
    <div className="text-center"><LOCATIONS/>
     <div>Locations</div> 
    </div>
   
      </form>
      <form className="border border-dark  rounded p-4">
        <h3 className="text-center">Informations personnels</h3>
        <div className="d-sm-flex gap-5 my-5">
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
        <div className="text-center">
          <button type="submit" className="btn btn-info px-5">
            Enregistrer
          </button>
        </div>
        <div className="text-center pt-3">
          <button type="submit" className="btn btn-danger">
            Supprimer mon compte
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
