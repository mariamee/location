import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const PartnerNavbar = () => {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const logout = () => {
    localStorage.removeItem('data')
    setUser(null)
    navigate('/login')
  }

  return (
    <div className="  d-flex  justify-content-start align-items-center p-2 shadow navbar navbar-expand-xl navbar-light bg-dark ">
      <div className="container-fluid h6 justify-content-start">
        <div className="dd">
          <Link className="navbar-brand text-light" to="personal-information">
            <img src="https://i.imgur.com/ngIERO2.png" alt="profile" />
            <Link className="navbar-brand-warning " to="personal-information">
              Mon{' '}
            </Link>{' '}
            profil
          </Link>
        </div>
        <div className="gg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Acceuil
              </Link>
            </li>
            {/* {<li className="nav-item">
              <a className="nav-link text-light" href="mymessages">
                Mes Messages
              </a>
            </li>}*/}
            <li className="nav-item">
              <a className="nav-link text-light" href="myrequests">
                Mes Demandes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="mycomments">
                Commentaires
              </a>
            </li>

            <li className="d-flex">
              <button className="d-flex nav-link text-dark btn btn-warning btn-sm ms-2 " onClick={logout}>
                Se déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PartnerNavbar
