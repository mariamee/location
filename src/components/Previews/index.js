import React, { useEffect, useState } from 'react'
import useAnnonces from 'hooks/useAnnonces'
import Preview from './Preview'
import { getAllAnnonces } from 'services/annonce'
import { getAllFavoris } from 'services/favoris'

const Previews = () => {
  const { annonces, setAnnonces } = useAnnonces()
  const [favAnnonces, setFavAnnonces] = useState([])

  useEffect(() => {
    getAllAnnonces().then(res => setAnnonces(res))
    getAllFavoris().then(response => setFavAnnonces(response))
  }, [])

  if (!annonces?.length) return null

  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>A louer</h2>
      <div className="d-flex flex-wrap">
        {annonces?.map(annonce => (
          <Preview
            key={annonce.id}
            {...annonce}
            isFavoris={favAnnonces?.find(a => a.annonce_id === annonce.id)}
            setFavAnnonces={setFavAnnonces}
          />
        ))}
      </div>
    </div>
  )
}

export default Previews
