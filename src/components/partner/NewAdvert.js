import React, { useState } from 'react'
import moment from 'moment'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'

import { CITIES, CATEGORIES } from '../../utils/constants'
import { addNewAnnonce, addPremiumToAnnonce } from 'services/annonce'

import useAuth from 'hooks/useAuth'
import useNeedToBeAuth from 'hooks/useNeedToBeAuth'

const NewAdvert = () => {
  //   const user = useAuth()?.user;
  useNeedToBeAuth()
  const { user } = useAuth()
  const user_id = user?.user?.id

  const navigate = useNavigate()
  const [ville, setVille] = useState('')
  const [categorie, setCategorie] = useState('')
  const [marque, setMarque] = useState('')
  const [prix, setPrix] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date_debut, setDate_debut] = useState(new Date())
  const [date_fin, setDate_fin] = useState(new Date())
  const [image, setImage] = useState(null)
  const [duree, setDuree] = useState(7)

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    formData.append('ville', ville?.value)
    formData.append('categorie', categorie?.value)
    formData.append('marque', marque)
    formData.append('prix', prix)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('date_debut', moment(date_debut).format('YYYY-MM-DD'))
    formData.append('date_fin', moment(date_fin).format('YYYY-MM-DD'))
    formData.append('disponibilite', '1')
    formData.append('status', '1')
    formData.append('particulier_id', user_id)

    const isPosted = await addNewAnnonce(formData)
    if (isPosted?.id) {
      const premiumPayload = {
        annonce_id: isPosted?.id,
        date_debut: moment(date_debut).format('YYYY-MM-DD'),
        date_fin: moment(date_debut).add(duree, 'days').format('YYYY-MM-DD'),
      }
      const isAddedToPremium = await addPremiumToAnnonce(premiumPayload)
      if (isAddedToPremium) navigate('/')
    }
  }

  const onImageChange = event => {
    event.preventDefault()

    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0]
      // setImage(URL.createObjectURL(img))
      setImage(img)
    }
  }

  return (
    <>
      <form className="border border-dark rounded p-4 shadow-lg bg-light">
        <div className="h6 text-danger">* Décrivez votre produit !</div>
        <div className="flex-column me-4 mt-2">
          <div className="flex-column ">
            <label htmlFor="categorie">Categorie</label>
            <Select id="categorie" options={CATEGORIES} value={categorie} onChange={o => setCategorie(o)} />
          </div>
          <div className="mt-2 flex-column pt-0 ">
            <label htmlFor="category">Titre de votre Annonce</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control mt-3 p-25"
              id="bio"
              placeholder="Titre Annonce"
            />
          </div>

          <div className="text-info mt-2">* Télécharger une image,cela favorise votre annonce!</div>
          <div className="border border-secondary rounded py-2 ps-2  bg-light mt-2">
            <input type="file" onChange={onImageChange} accept="image/*" />
          </div>
        </div>
        <div className="mt-2 flex-column pt-2 ">
          <label htmlFor="category">Description de l'objet</label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="form-control mt-3 p-25"
            id="description"
            placeholder="**** Description *****"
          />
        </div>
        <div className="flex-column pt-2">
          <label htmlFor="ville">Ville</label>
          <Select id="ville" options={CITIES} value={ville} onChange={o => setVille(o)} />
        </div>

        <div className="flex-column pt-2">
          <label htmlFor="price">Tarif en DH/Jour</label>
          <input class="form-control" type="number" id="prix" value={prix} onChange={e => setPrix(e.target.value)} />
        </div>
        <div className="flex-column pt-2">
          <label htmlFor="marque">Marque</label>
          <input class="form-control" id="marque" value={marque} onChange={e => setMarque(e.target.value)} />
        </div>
        <div className="h5 text-info mt-2">Choisissez l'option annonce premium</div>
        <div className="mt-2">Cette option vous permettra d'afficher votre annonce sur la première page pendant :</div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="week" id="week" checked={duree === 7} onClick={() => setDuree(7)} />
          <label class="form-check-label" for="week">
            une semaine
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="fifteen" id="fifteen" checked={duree === 15} onClick={() => setDuree(15)} />
          <label class="form-check-label" for="fifteen">
            15 jours
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="month" id="month" checked={duree === 30} onClick={() => setDuree(30)} />
          <label class="form-check-label" for="month">
            Un mois
          </label>
        </div>
        <div className="h5 text-info mt-2">Activation de l'annonce</div>
        <div className="mt-2 ">J'aimerais bien activer mon annonce pendant cette durée :</div>
        <div className="d-flex justify-content-around mb-3">
          <div className=" flex-column pt-2 ms-0 ">
            <label htmlFor="date_debut">Date debut</label>
            <DatePicker selected={date_debut} onChange={date => setDate_debut(date)} />
          </div>
          <div className="mt-2 ml-0 flex">
            <label htmlFor="date_fin">Date fin</label>
            <DatePicker selected={date_fin} onChange={date => setDate_fin(date)} />
          </div>
        </div>

        <button onClick={onSubmit} type="submit" className="bg-success border-success w-25 mt-2 align-center">
          Valider
        </button>
      </form>
    </>
  )
}
export default NewAdvert
