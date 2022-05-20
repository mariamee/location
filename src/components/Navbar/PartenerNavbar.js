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
    <nav className="  d-flex  p-2 ml-2 shadow navbar navbar-expand-xl navbar-light bg-warning ">
      <div className="container-fluid h6 justify-content-start">
        <div className="dd">
          <Link className="navbar-brand" to="/">
            <img src="https://i.imgur.com/ngIERO2.png" alt="profile" />
            Mon Profil
          </Link>
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
              <a className="nav-link active" aria-current="page" href="myadvert">
                Mes Annonces
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mymessages">
                Mes Messages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="myrequests">
                Mes Demandes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="mycomments">
                Commentaires
              </a>
            </li>

            <li className="d-flex">
              <button className="d-flex nav-link btn btn-outline btn-danger btn-sm" onClick={logout}>
                Se déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default PartnerNavbar
