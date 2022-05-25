import React, { useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate } from 'react-router-dom'
import '../utils/css/style_register.css'
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
    e.preventDefault()

    if (!isEnabled) return

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
    <div class="inner mt-5">
      <h1 className="text-center">S'inscrire</h1>
      <form>
        <p className="text-danger small">
          <small>* Remplir soigneusement les informations suivantes:</small>
        </p>

        <div class="form-group">
          <div class="form-wrapper">
            <label htmlFor="name">Username:</label>
            <div class="form-holder">
              <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" class="form-control" />
            </div>
          </div>
          <div class="form-wrapper">
            <label htmlFor="email">Email:</label>
            <div class="form-holder">
              <input value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" class="form-control" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-wrapper">
            <label htmlFor="password">Password:</label>
            <div class="form-holder">
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
                placeholder="********"
              />
            </div>
          </div>
          <div class="form-wrapper">
            <label htmlFor="cin">CIN:</label>
            <div class="form-holder">
              <input value={cin} onChange={e => setCin(e.target.value)} id="cin" type="text" class="form-control" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-wrapper">
            <label htmlFor="adresse">Adresse:</label>
            <div class="form-holder">
              <input value={addresse} onChange={e => setAddresse(e.target.value)} class="form-control" id="adresse" type="text" />
            </div>
          </div>
          <div class="form-wrapper">
            <label htmlFor="ville">Ville:</label>
            <div class="form-holder select">
              <Select options={CITIES} value={ville} onChange={o => setVille(o)} />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-wrapper">
            <label htmlFor="tel">Téléphone:</label>
            <div class="form-holder">
              <input value={telephone} onChange={e => setTelephone(e.target.value)} class="form-control" id="tel" type="tel" />
            </div>
          </div>
          <div class="form-wrapper">
            <label htmlFor="role"> Je suis un:</label>
            <div class="form-holder select">
              <Select options={ROLES} value={role} onChange={o => setRole(o)} />
            </div>
          </div>
        </div>

        <div class="form-end">
          <p class="text-center">
            Vous avez déjà un compte?
            <Link to="/register" className="ms-2">
              Se connecter
            </Link>
          </p>
          <div class="button-holder">
            <button id="btn-maisaa" type="submit" onClick={onSubmit}>
              S'inscrire
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
