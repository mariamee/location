import React from 'react'
import { HEART } from 'utils/icons'
import FavPreviews from 'components/Previews/FavPreviews'

const Favorits = () => {
  return (
    <div>
      <button className="btn btn-danger fw-bold h2 text-light mt-5">
        Ma liste d'envies <HEART />
      </button>
      <FavPreviews />
    </div>
  )
}

export default Favorits
