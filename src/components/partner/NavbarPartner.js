import React from "react";
import { Link } from "react-router-dom";
import useAuth from "hooks/useAuth";
 const NavbarPartner = () => {
       return(
        <nav class="  d-flex  p-2 ml-2 shadow navbar navbar-expand-xl navbar-light bg-info ">
       <div class="container-fluid h6 justify-content-start  ">
         <a class="navbar-brand" href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/>
Mon Profil</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">Mes Annonces</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Mes Messages</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Mes Demandes</a>
             </li>
             <li class="nav-item">
               <a class="nav-link disabled">Paramétrage</a>
             </li>
             
             <li class="nav-item">
               <a class="nav-link disabled">Commentaires</a>
             </li>
             
             <li class="nav-item">
               <a class="nav-link disabled">Déconnexion</a>
             </li>
           </ul>
         </div>
       </div>
     </nav> );
    };
     export default NavbarPartner;