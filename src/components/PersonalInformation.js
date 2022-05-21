import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { CITIES } from '../utils/constants'
import { HEART_ICON, LOCATIONS, MESSAGES } from '../utils/icons'
import { getMyData, updateUser } from 'services/login'
import { toast } from 'react-toastify'

const PersonalInformation = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [ville, setVille] = useState('')
  const [addresse, setAddresse] = useState('')
  const [cin, setCin] = useState('')

  useEffect(() => {
    getMyData().then(_user => {
      setName(_user?.name || '')
      setEmail(_user?.email || '')
      setTelephone(_user?.telephone || '')
      setVille(_user?.ville || '')
      setAddresse(_user?.addresse || '')
      setCin(_user?.cin || '')
    })
  }, [])

  const onSave = async e => {
    e.preventDefault()
    console.log('save')
    const user = { name, email, telephone, ville, addresse, cin }
    const isUpdated = await updateUser(user)
    if (isUpdated) {
      toast.success('User Updated successfully')
    }
  }

  return (
    <div className="p-5 py-5">
      <form className="border border-dark p mb-5 h5 d-flex justify-content-around">
        <Link to="/favorite" style={{ textDecoration: 'none' }}>
          <div className="text-center">
            <HEART_ICON size={65} />
            <div className="text-dark">Liste d'envies</div>
          </div>
        </Link>
        <Link to="/messages" style={{ textDecoration: 'none' }}>
          <div className="text-center">
            <MESSAGES />
            <div className="text-dark">Mes Messages</div>
          </div>
        </Link>
        <Link to="/myadverts" style={{ textDecoration: 'none' }}>
          <div className="text-center">
            <LOCATIONS />
            <div className="text-dark">Mes Annonces</div>
          </div>
        </Link>
      </form>
      <form className="border border-dark  rounded p-4">
        <h3 className="text-center">Informations personnels</h3>
        <div className="d-sm-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="lname">Nom</label>
            <input className="form-control" id="lname" placeholder="Votre nom" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="cin">CIN</label>
            <input className="form-control" id="cin" placeholder="Votre CIN" value={cin} onChange={e => setCin(e.target.value)} />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="email">Email</label>
            <input className="form-control" id="email" placeholder="Votre Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="tel">Téléphone</label>
            <input
              className="form-control"
              id="tel"
              placeholder="Votre numéro de téléphone"
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="aderesse">Addresse</label>
            <input
              className="form-control"
              id="aderesse"
              placeholder="Votre Addresse"
              value={addresse}
              onChange={e => setAddresse(e.target.value)}
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="ville">Ville</label>
            <Select id="ville" options={CITIES} value={CITIES?.find(c => c.value === ville)} onChange={o => setVille(o.value)} />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-info px-5" onClick={onSave}>
            Enregistrer
          </button>
        </div>
        <div className="text-center pt-3">
          <button className="btn btn-danger">Supprimer mon compte</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInformation
