import React from "react";
import Select from "react-select";
import {CATEGORIES,PRICES} from "../../utils/constants";


import { useAuth } from "hooks/useAuth";
const NewAdvert= () => {
    return(
        <>
        <form className="border border-dark rounded p-4 shadow-lg bg-light ">
        <div className="h6 text-danger">* Décrivez votre produit !</div>
            <div className="flex-column me-4 mt-2">
                <div className="flex-column ">
                    <label htmlFor="category">Categorie</label>
                    <Select id="category" options={CATEGORIES} />
                </div>
            <div className="mt-2 flex-column pt-0 ">
            <label htmlFor="category">Titre de votre Annonce</label>
            <input
            className="form-control mt-3 p-25"
            id="bio"
            placeholder="Titre Annonce"
            />  
        </div>
        <div className=" form-check form-check-inline pt-2 ">
            <input
            class="form-check-input" type="radio" name="Neuf" id="new" value="new" />
            <label class="form-check-label" for="new">Neuf</label>
             
        </div>
        <div className=" form-check form-check-inline pt-2 ">
            <input
            class="form-check-input" type="radio" name="Bon" id="medium" value="medium" />
            <label class="form-check-label" for="medium">Bon état</label> 
        </div>
        <div className=" form-check form-check-inline pt-2 ">
            <input
            class="form-check-input" type="radio" name="Moyen" id="old" value="old" />
            <label class="form-check-label" for="old">Moyen</label>   
        </div>
        <div className="text-info mt-2">* Télécharger une image,cela favorise votre annonce!</div>
        <div className="border border-secondary rounded py-2 ps-2  bg-light mt-2">
            <button className="bg-success border-success rounded p-25"><img className="pe-2" src="https://img.icons8.com/dotty/20/000000/download.png"/>Ajouter Image</button></div>
        </div>
        <div className="mt-2 flex-column pt-2 ">
            <label htmlFor="category">Description de l'objet</label>
            <input
            className="form-control mt-3 p-25"
            id="description"
            placeholder="**** Description *****"
            />  
        </div>
        <div className="mt-2 flex-column pt-2 ">
            <label htmlFor="category">Conditions sur l'objet</label>
            <input
            className="form-control mt-3 p-25"
            id="condition"
            placeholder="Condition 1 ..."
            />  
        </div>
        
        <div className="flex-column pt-2">
                    <label htmlFor="category">Tarif en DH/Jour</label>
                    <Select id="category" options={PRICES} />
                </div>
            <div className="h5 text-info mt-2">Choisissez l'option annonce premium</div>
            <div className="mt-2">Cette option vous permettra d'afficher votre annonce sur la première page pendant :</div>
            <div className=" form-check pt-2 ">
            <input
            class="form-check-input" type="radio" name="Semaine" id="week" value="week" />
            <label class="form-check-label" for="week">Une semaine</label> 
        </div>
        <div className=" form-check pt-2 ">
            <input
            class="form-check-input" type="radio" name="15jours" id="days" value="days" />
            <label class="form-check-label" for="days">15 jours</label> 
        </div>
        <div className=" form-check pt-2 ">
            <input
            class="form-check-input" type="radio" name="mois" id="month" value="month" />
            <label class="form-check-label" for="month">Un mois</label> 
        </div>
        <div className="h5 text-info mt-2">Activation de l'annonce</div>
        <div className="mt-2 ps-5">J'aimerais bien activer l'annonce</div>
        <div className=" form-check pt-2 ">
            <input
            class="form-check-input" type="radio" name="Maintenant" id="now" value="now" />
            <label class="form-check-label" for="now">Maintenant</label> 
        </div>
        <div className=" form-check pt-2 ">
            <input
            class="form-check-input" type="radio" name="a-week" id="a-week" value="a-week" />
            <label class="form-check-label" for="a-week">Après une semaine</label> 
        </div>
        <div className="mt-2 flex-column pt-2 ">
            <label htmlFor="category">A préciser en jours</label>
            <input
            className="form-control mt-3 p-25"
            id="nbdays"
            placeholder="ex = 5 Jours"
            />  
        </div>
        
        <button className="bg-success border-success w-25 mt-2 align-center">Valider</button>
        </form></>
       
    );
};
export default NewAdvert;