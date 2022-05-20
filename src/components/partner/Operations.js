import React from 'react'
import { Link } from 'react-router-dom'

const Operations = ({ id, title, prix, description }) => {
  return (
    <div className="d-flex">
      <Link to="/modifyadvert">
        <button type="button" className="btn btn-success">
          Modifier
        </button>
      </Link>
      <button type="button" className="btn btn-secondary ms-2 ps-2 pe-2">
        Archiver
      </button>
      <button type="button" className="btn btn-danger ms-2 ps-2 pe-2">
        Supprimer
      </button>
    </div>
  )
}
export default Operations
