import React, { useEffect, useState } from 'react'
import { HEART } from 'utils/icons'
import Filter from 'components/Filter'
import Previews from 'components/Previews'
import { getFavorits } from 'services/post'
import FavPreviews from 'components/Previews/FavPreviews'

const Favorits = () => {
  const [favPreviews, setFavPreviews] = useState([])

  useEffect(() => {
    getFavorits().then(response => setFavPreviews(response))
  }, [])
  return (
    <div>
      <button className="btn btn-danger fw-bold h2 text-light mt-5">Ma liste d'envies <HEART/></button>
      <FavPreviews previews={favPreviews} />
    </div>
  )
}

export default Favorits
