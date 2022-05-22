import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import '../utils/css/login.css'
import image from '../utils/rento-logo.png'

import { onConnect } from 'services/login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const onSubmit = async e => {
    e.preventDefault()
    const response = await onConnect(email, password)

    if (response) {
      setUser(response)
      navigate('/')
    }
  }

  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div class="img" style={{ backgroundImage: `url(${image}` }}></div>
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Se connecter</h3>
                  </div>
                </div>

                <form class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">
                      E-mail
                    </label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      class="form-control"
                      placeholder="ex: xyz@gmail.com"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">
                      Mot de passe
                    </label>
                    <input
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      class="form-control"
                      placeholder="********"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button onClick={onSubmit} type="submit" class="form-control btn btn-primary rounded submit px-3">
                      {' '}
                      Se connecter
                    </button>
                  </div>
                </form>
                <p class="text-center">
                  {' '}
                  Pas encore inscrit ?
                  <Link to="/register" className="ms-2">
                    s'inscrire gratuitement
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
