import React from "react";
import Select from "react-select";
import {
  CATEGORIES,
  CITIES,
  PRICES,
  DISPONIBILITIES,
} from "../utils/constants";
import { SEARCH_ICON } from "../utils/icons";

const Filter = () => {
  return (
    <div className="border border-dark rounded p-4 shadow-lg bg-light">
      <div className="d-flex">
        <div className="flex-fill me-4">
          <label htmlFor="category">Categorie</label>
          <Select id="category" options={CATEGORIES} />
        </div>
        <div className="flex-fill">
          <label htmlFor="city">Ville</label>
          <Select id="city" options={CITIES} />
        </div>
      </div>
      <div className="d-flex mt-4">
        <div className="flex-fill me-4">
          <label htmlFor="price">Prix</label>
          <Select id="price" options={PRICES} />
        </div>
        <div className="flex-fill">
          <label htmlFor="disponibity">Disponibité</label>
          <Select id="disponibity" options={DISPONIBILITIES} />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary d-flex align-items-center shadow">
          <SEARCH_ICON />
          <span className="ms-2">Rechercher</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
