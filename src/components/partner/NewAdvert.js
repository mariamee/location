// import React, { useState } from "react";
// import Select from "react-select";
// import DatePicker from "react-datepicker";

// import { CITIES, OBJECTS, PRICES } from "../../utils/constants";

// import { useAuth } from "hooks/useAuth";

// const NewAdvert = () => {
//   const user = useAuth()?.user;
//   console.log("user", user);
//   const [user_id, setUser_id] = useState("");
//   const [ville, setVille] = useState("");
//   const [objet, setObjet] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [date_debut, setDate_debut] = useState(new Date());
//   const [date_fin, setDate_fin] = useState(new Date());
//   const [disponibilie, setDisponibilie] = useState("");
//   const [status, setStatus] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     // const isPosted = await onPostAdvert({
// //       user_id,
// //       ville,
// //       objet_id: objet.value,
// //       title,
// //       description,
// //       date_debut,
// //       date_fin,
// //       disponibilie: "1",
// //       status: "1",
// //     });
// //     if (isPosted) navigate("/");
// //   };

//   return (
//     <>
//       <form className="border border-dark rounded p-4 shadow-lg bg-light ">
//         <div className="h6 text-danger">* Décrivez votre produit !</div>
//         <div className="flex-column me-4 mt-2">
//           <div className="flex-column ">
//             <label htmlFor="object">Categorie</label>
//             <Select
//               id="object"
//               options={OBJECTS}
//               value={objet}
//               onChange={(o) => setObjet(o)}
//             />
//           </div>
//           <div className="mt-2 flex-column pt-0 ">
//             <label htmlFor="category">Titre de votre Annonce</label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="form-control mt-3 p-25"
//               id="bio"
//               placeholder="Titre Annonce"
//             />
//           </div>
//           {/* <div className=" form-check form-check-inline pt-2 ">
//             <input
//               class="form-check-input"
//               type="radio"
//               name="Neuf"
//               id="new"
//               value="new"
//             />
//             <label class="form-check-label" for="new">
//               Neuf
//             </label>
//           </div> */}
//           {/* <div className=" form-check form-check-inline pt-2 ">
//             <input
//               class="form-check-input"
//               type="radio"
//               name="Bon"
//               id="medium"
//               value="medium"
//             />
//             <label class="form-check-label" for="medium">
//               Bon état
//             </label>
//           </div> */}
//           {/* <div className=" form-check form-check-inline pt-2 ">
//             <input
//               class="form-check-input"
//               type="radio"
//               name="Moyen"
//               id="old"
//               value="old"
//             />
//             <label class="form-check-label" for="old">
//               Moyen
//             </label>
//           </div> */}
//           <div className="text-info mt-2">
//             * Télécharger une image,cela favorise votre annonce!
//           </div>
//           <div className="border border-secondary rounded py-2 ps-2  bg-light mt-2">
//             <button className="bg-success border-success rounded p-25">
//               <img
//                 className="pe-2"
//                 src="https://img.icons8.com/dotty/20/000000/download.png"
//               />
//               Ajouter Image
//             </button>
//           </div>
//         </div>
//         <div className="mt-2 flex-column pt-2 ">
//           <label htmlFor="category">Description de l'objet</label>
//           <input
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="form-control mt-3 p-25"
//             id="description"
//             placeholder="**** Description *****"
//           />
//         </div>
//         {/* <div className="mt-2 flex-column pt-2 ">
//           <label htmlFor="category">Conditions sur l'objet</label>
//           <input
//             className="form-control mt-3 p-25"
//             id="condition"
//             placeholder="Condition 1 ..."
//             />
//         </div> */}
//         <div className="flex-column pt-2">
//           <label htmlFor="ville">Ville</label>
//           <Select
//             id="ville"
//             options={CITIES}
//             value={ville}
//             onChange={(o) => setVille(o)}
//           />
//         </div>

//         <div className="flex-column pt-2">
//           <label htmlFor="price">Tarif en DH/Jour</label>
//           <Select
//             id="price"
//             options={PRICES}
//             value={price}
//             onChange={(o) => setPrice(o)}
//           />
//         </div>
//         <div className="h5 text-info mt-2">
//           Choisissez l'option annonce premium
//         </div>
//         <div className="mt-2">
//           Cette option vous permettra d'afficher votre annonce sur la première
//           page pendant :
//         </div>
//         <div className=" form-check pt-2 ">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="Semaine"
//             id="week"
//             value="week"
//           />
//           <label class="form-check-label" for="week">
//             Une semaine
//           </label>
//         </div>
//         <div className=" form-check pt-2 ">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="15jours"
//             id="days"
//             value="days"
//           />
//           <label class="form-check-label" for="days">
//             15 jours
//           </label>
//         </div>
//         <div className=" form-check pt-2 ">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="mois"
//             id="month"
//             value="month"
//           />
//           <label class="form-check-label" for="month">
//             Un mois
//           </label>
//         </div>
//         <div className="h5 text-info mt-2">Activation de l'annonce</div>
//         <div className="mt-2 ps-5">J'aimerais bien activer l'annonce</div>
//         <div className=" form-check pt-2 ">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="Maintenant"
//             id="now"
//             value="now"
//           />
//           <label class="form-check-label" for="now">
//             Maintenant
//           </label>
//         </div>
//         <div className=" form-check pt-2 ">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="a-week"
//             id="a-week"
//             value="a-week"
//           />
//           <label class="form-check-label" for="a-week">
//             Après une semaine
//           </label>
//         </div>
//         <div className="mt-2 flex-column pt-2 ">
//           <label htmlFor="category">A préciser en jours</label>
//           <input
//             className="form-control mt-3 p-25"
//             id="nbdays"
//             placeholder="ex = 5 Jours"
//           />
//         </div>
//         <div className="d-flex justify-content-around mb-3">
//           <div className="mt-2 flex-column pt-2 ">
//             <label htmlFor="date_debut">Date debut</label>
//             <DatePicker
//               selected={date_debut}
//               onChange={(date) => setDate_debut(date)}
//             />
//           </div>
//           <div className="mt-2 flex-column pt-2 ">
//             <label htmlFor="date_fin">Date fin</label>
//             <DatePicker
//               selected={date_fin}
//               onChange={(date) => setDate_fin(date)}
//             />
//           </div>
//         </div>

//         <button className="bg-success border-success w-25 mt-2 align-center">
//           Valider
//         </button>
//       </form>
//     </>
//   );
// };
// export default NewAdvert;
