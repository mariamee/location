import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Opérations from "./Operations";

const Myadverts = () => {
  return (
<div>
<div className="d-flex justify-content-start align-items-center p-2 shadow bg-light ">        
<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-advert-internet-marketing-flaticons-lineal-color-flat-icons.png"/>    
<div className="text-align h5 py-2 ps-5"> Mes annonces</div>
<div>
</div>
</div>
<div><button type="button" className="btn btn-info mt-5"> +  Créer une nouvelle annonce</button></div>
<div className="align-items-center shadow mt-5 ">
<table class="table">
   <thead class="table-warning ">
  <tr>
      <th scope="col">ID Annonce</th>
      <th scope="col">Catégorie</th>
      <th scope="col">Titre</th>
      <th scope="col">Opérations</th>
      
    </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">01</th>
            <td></td>
            <td></td>
            <td ><Opérations/></td>
        </tr>
        
        <tr>
            <th scope="row">02</th>
            <td></td>
            <td></td>
            <td><Opérations/></td>
        </tr>
        
        <tr>
            <th scope="row">03</th>
            <td></td>
            <td></td>
            <td><Opérations/></td>
        </tr>
    </tbody>
</table>
</div>
</div>

  );
};

export default Myadverts;