import React, { useEffect, useState } from 'react'
import { HEART } from 'utils/icons'
import Filter from 'components/Filter'
import Previews from 'components/Previews'
import FavPreviews from 'components/Previews/FavPreviews'
import { getAllFavoris } from 'services/favoris'

const Favorits = () => {
  const [favPreviews, setFavPreviews] = useState([])

  return (
    <div>
      <button className="btn btn-danger fw-bold h2 text-light mt-5">
        Ma liste d'envies <HEART />
      </button>
      <FavPreviews previews={favPreviews} />
    </div>
  )
}

export default Favorits
