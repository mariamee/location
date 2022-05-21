import React, { useState } from 'react'
import moment from 'moment'
import Modal from 'react-modal'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import { editAnnonce } from 'services/annonce'
import { CATEGORIES, CITIES, STYLE_MODAL } from 'utils/constants'
import useAuth from 'hooks/useAuth'

const EditeOperation = ({ id, annonce, setAnnonces }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const user_id = user?.user?.id

  const [ville, setVille] = useState(annonce?.ville || '')
  const [categorie, setCategorie] = useState(annonce?.categorie || '')
  const [marque, setMarque] = useState(annonce?.marque || '')
  const [prix, setPrix] = useState(annonce?.prix || '')
  const [title, setTitle] = useState(annonce?.title || '')
  const [description, setDescription] = useState(annonce?.description || '')
  const [date_debut, setDate_debut] = useState(new Date(annonce?.date_debut))
  const [date_fin, setDate_fin] = useState(new Date(annonce?.date_fin))
  const [disponibilite, setDisponibilite] = useState(annonce?.disponibilite || '')
  const [status, setStatus] = useState(annonce?.status || '')

  const handleEditAnnonce = async e => {
    e.preventDefault()
    setLoading(true)
    const editedAnnonce = {
      particulier_id: user_id,
      ville,
      title,
      description,
      date_debut: moment(date_debut).format('YYYY-MM-DD'),
      date_fin: moment(date_fin).format('YYYY-MM-DD'),
      disponibilite: '1',
      status: '1',
      marque,
      categorie,
      prix,
    }

    const isEdited = await editAnnonce(editedAnnonce, id)
    setLoading(false)
    if (isEdited) {
      setIsOpen(false)
      //   setAnnonces(annonces => annonces.map(annonce => (annonce.id !== id ? annonce : isEdited)))
    }
  }

  const onClose = () => {
    setVille(annonce?.ville || '')
    setCategorie(annonce?.categorie || '')
    setMarque(annonce?.marque || '')
    setPrix(annonce?.prix || '')
    setTitle(annonce?.title || '')
    setDescription(annonce?.description || '')
    setDate_debut(new Date(annonce?.date_debut))
    setDate_fin(new Date(annonce?.date_fin))
    setDisponibilite(annonce?.disponibilite || '')
    setStatus(annonce?.status || '')

    setIsOpen(false)
  }

  return (
    <>
      <button className="btn btn-success" onClick={() => setIsOpen(true)}>
        Modifier
      </button>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={STYLE_MODAL} contentLabel="Example Modal">
        <div className="m-3">
          <div className="h3 text-primary mb-3">Modifier {id}</div>
          <form>
            <div className="d-flex">
              <div className="">
                <label htmlFor="title">Titre</label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="form-control p-25"
                  id="title"
                  placeholder="**** Title *****"
                />
              </div>
              <div className="ms-3">
                <label htmlFor="category">Description</label>
                <input
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="form-control p-25"
                  id="description"
                  placeholder="**** Description *****"
                />
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="">
                <label htmlFor="title">Marque</label>
                <input
                  value={marque}
                  onChange={e => setMarque(e.target.value)}
                  className="form-control p-25"
                  id="marque"
                  placeholder="**** Marque *****"
                />
              </div>
              <div className="ms-3">
                <label htmlFor="prix">Prix</label>
                <input
                  type="number"
                  value={prix}
                  onChange={e => setPrix(e.target.value)}
                  className="form-control p-25"
                  id="prix"
                  placeholder="**** Prix *****"
                />
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-fill">
                <label htmlFor="ville" className="me-3">
                  Ville
                </label>
                <Select id="ville" options={CITIES} value={CITIES?.find(c => c.value === ville)} onChange={o => setVille(o.value)} />
              </div>
              <div className="flex-fill">
                <label htmlFor="categorie" className="me-3">
                  Categori
                </label>
                <Select
                  id="categorie"
                  options={CATEGORIES}
                  value={CATEGORIES?.find(c => c.value === categorie)}
                  onChange={o => setCategorie(o.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-around mb-3">
              <div className="mt-2 flex-column pt-2 ">
                <label htmlFor="date_debut">Date debut</label>
                <DatePicker selected={date_debut} onChange={date => setDate_debut(date)} />
              </div>
              <div className="mt-2 flex-column pt-2 ">
                <label htmlFor="date_fin">Date fin</label>
                <DatePicker selected={date_fin} onChange={date => setDate_fin(date)} />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" disabled={loading} className="btn btn-success mt-4" onClick={handleEditAnnonce}>
                Modifier
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default EditeOperation
