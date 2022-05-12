import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { ARROW } from "../../utils/icons";
const MyComments = () => {
    return (
        <div>
      <div>
        <form className="border border-warning rounded pe-5 py-2  mx-auto d-flex justify-content-between">
            <div><ARROW/></div>
           <div className="text-center  h4">Commentaires reçus </div>
        </form>
      </div>
      <div className="py-5">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID Client</th>
      <th scope="col">Username</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1902</th>
      <td>melalaoui19</td>
      <td>this is a comment on partenaire</td>
    </tr>
   
    <tr>
    <th scope="row">2003</th>
      <td>safae03</td>
      <td>this is a comment on partenaire</td>
      </tr>
     
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>this is a comment on partenaire</td>
    </tr>
    
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>this is a comment on partenaire</td>
    </tr>
    
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>this is a comment on partenaire</td>
    </tr>
    </tbody>
</table></div> 
      </div>

    );
  };
  
  export default MyComments;
  