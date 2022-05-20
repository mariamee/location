import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Responses = () => {
  return (
    <div className="d-flex">
      <Link to="/modifyadvert">
        <button type="button" className="btn btn-success">
          Accepter
        </button>
      </Link>
      <button type="button" className="btn btn-danger ms-2 ps-2 pe-2">
        Refuser
      </button>
    </div>
  )
}
export default Responses
