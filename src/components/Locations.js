import React from "react";
import { Link } from "react-router-dom";
import { ARROW } from "../utils/icons";

const Locations = () => {
    return (
        <div>
      <div>
        <form className="border border-dark rounded pe-5 py-2  mx-auto d-flex justify-content-between">
            <div><ARROW/></div>
           <div className="text-center  h4">Locations </div>
        </form>
      </div>
      <div className="py-5">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Catégorie</th>
      <th scope="col">Objet</th>
      <th scope="col">Prix</th>
      <th scope="col">Durée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr>
   
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr> 
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr>
    
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr>
    
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr>
    
    <tr>
      <th scope="row">*****</th>
      <td>*****</td>
      <td>*****</td>
      <td>*****</td>
    </tr>
  </tbody>
</table></div> 
      </div>

    );
  };
  
  export default Locations;
  