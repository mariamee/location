import React, { useEffect, useState } from 'react'
import Preview from './Preview'
import { getAllFavoris } from 'services/favoris'

const FavPreviews = () => {
  const [favAnnonces, setFavAnnonces] = useState([])

  useEffect(() => {
    getAllFavoris().then(response => setFavAnnonces(response))
  }, [])

  if (!favAnnonces?.length) return null

  return (
    <div className=" p-3 my-4">
      <div className="d-flex flex-wrap">
        {favAnnonces?.map(annonce => (
          <Preview key={annonce.id} {...annonce} />
        ))}
      </div>
    </div>
  )
}

export default FavPreviews
