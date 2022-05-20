import React, { useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate } from 'react-router-dom'

import { CITIES, ROLES } from '../utils/constants'
import { onRegister } from 'services/login'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ville, setVille] = useState('')
  const [addresse, setAddresse] = useState('')
  const [telephone, setTelephone] = useState('')
  const [cin, setCin] = useState('')
  const [role, setRole] = useState('')

  const onSubmit = async e => {
    if (!isEnabled) return

    e.preventDefault()
    const isRegistered = await onRegister({
      name,
      email,
      password,
      ville: ville.value,
      addresse,
      telephone,
      cin,
      role: role.value,
    })
    if (isRegistered) navigate('/login')
  }

  const isEnabled = name && email && password && ville?.value && addresse && telephone && cin && role?.value

  return (
    <div>
      <h1 className="text-center">S'inscrire</h1>
      <form className="border border-dark  rounded p-4">
        <p className="text-danger small">
          <small>* Remplir soigneusement les informations suivantes:</small>
        </p>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="name">Nom</label>
            <input value={name} onChange={e => setName(e.target.value)} className="form-control" id="name" placeholder="Votre nom" />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="cin">CIN</label>
            <input value={cin} onChange={e => setCin(e.target.value)} className="form-control" id="cin" placeholder="Votre CIN" />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Votre Email" />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="tel">Téléphone</label>
            <input
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              className="form-control"
              id="tel"
              placeholder="Votre numéro de téléphone"
            />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Votre Password"
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="ville">Ville</label>
            <Select options={CITIES} value={ville} onChange={o => setVille(o)} />
          </div>
        </div>
        <div className="d-flex gap-5 my-5">
          <div className="form-group flex-fill">
            <label htmlFor="adresse">Adresse</label>
            <input
              value={addresse}
              onChange={e => setAddresse(e.target.value)}
              className="form-control"
              id="adresse"
              placeholder="Votre adresse"
            />
          </div>
          <div className="form-group flex-fill">
            <label htmlFor="role">Role</label>
            <Select options={ROLES} value={role} onChange={o => setRole(o)} />
          </div>
        </div>
        <div className="text-center pt-5">
          <button disabled={!isEnabled} type="submit" className="btn btn-success" onClick={onSubmit}>
            Créer mon compte
          </button>
          <div className="my-4">
            Vous avez déjà un compte? <Link to="/login">se connecter</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
