import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'index.css'
import useAuth from 'hooks/useAuth'
import { onLogout } from 'services/login'

const NormalNavbar = () => {
  const navigate = useNavigate()

  const { user: data, setUser } = useAuth()
  const role = data?.role
  const user = data?.user

  const logout = async () => {
    await onLogout()
    setUser(null)
    localStorage.removeItem('data')
    navigate('/login')
  }

  return (
    <div className="d-flex justify-content-start align-items-center p-2 shadow bg-dark ">
      <div className="me-auto d-flex align-items-center">
        <Link to="/" className="text-decoration-none text-light h3 my-2">
          Rent
          <Link to="/" className="text-decoration-none text-warning h3 my-2">
            O
          </Link>
        </Link>
      </div>
      {user && (
        <div>
          <Link to="personal-information" className="h4 me-2 fw-bold text-warning">{user.name}</Link>
          <span className='ms-2 me-2 text-light'>{role?.role || ''}</span>
          <button onClick={logout} className="btn btn-warning btn-sm ms-2">
            log out
          </button>
        </div>
      )}
      {!user && (
        <div>
          <Link to="login">
            <button className="btn btn-outline-light me-2">Se connecter</button>
          </Link>
          <Link to="register">
            <button className="btn btn-outline-warning">S'inscrire</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default NormalNavbar
