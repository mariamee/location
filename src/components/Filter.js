import React, { useState } from 'react'
import Select from 'react-select'

import useAnnonces from 'hooks/useAnnonces'
import { getAllAnnonces, getFilteredAnnonces } from 'services/annonce'
import { CATEGORIES, CITIES, DISPONIBILITIES } from '../utils/constants'
import { SEARCH_ICON } from '../utils/icons'

const Filter = () => {
  const [ville, setVille] = useState('')
  const [categorie, setCategorie] = useState('')
  const [prix, setPrix] = useState('')
  const [disponible, setDisponible] = useState('')
  const { setAnnonces } = useAnnonces()

  const resetStates = () => {
    setVille('')
    setCategorie('')
    setPrix('')
    setDisponible('')
  }

  const onSearch = async e => {
    e.preventDefault()
    const filtered = await getFilteredAnnonces({ ville, categorie, prix, disponible })
    resetStates()
    setAnnonces(filtered)
  }

  const onReset = async e => {
    e.preventDefault()
    const _annonces = await getAllAnnonces()
    resetStates()
    setAnnonces(_annonces)
  }

  const disableSearch = !ville || !categorie || !prix || !disponible

  return (
    <form className="border border-dark rounded p-4 shadow-lg bg-light mt-5">
      <div className="d-flex">
        <div className="flex-fill me-4">
          <label htmlFor="category">Categorie</label>
          <Select
            id="category"
            options={CATEGORIES}
            value={CATEGORIES?.find(o => o.value === categorie) || null}
            onChange={o => setCategorie(o.value)}
          />
        </div>
        <div className="flex-fill">
          <label htmlFor="city">Ville</label>
          <Select id="city" options={CITIES} value={CITIES?.find(o => o.value === ville) || null} onChange={o => setVille(o.value)} />
        </div>
      </div>
      <div className="d-flex mt-4">
        <div className="flex-fill me-4">
          <label htmlFor="prix">Prix Max</label>
          <input id="prix" type="number" className="form-control" value={prix} onChange={e => setPrix(e.target.value)} />
          {/* <Select id="price" options={SORT_PRICES} /> */}
        </div>
        <div className="flex-fill">
          <label htmlFor="disponibity">Disponibité</label>
          <Select
            id="disponibity"
            options={DISPONIBILITIES}
            value={DISPONIBILITIES?.find(o => o.value === disponible) || null}
            onChange={o => setDisponible(o.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button disabled={disableSearch} className="btn btn-primary d-flex align-items-center shadow" type="submit" onClick={onSearch}>
          <SEARCH_ICON />
          <span className="ms-2">Rechercher</span>
        </button>
        <button className="btn btn-secondary ms-2" onClick={onReset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default Filter
