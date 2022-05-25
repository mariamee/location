import React, { useEffect } from 'react'
import useAnnonces from 'hooks/useAnnonces'
import Preview from './Preview'
import { getAllAnnonces } from 'services/annonce'

const FavPreviews = () => {
  const { annonces, setAnnonces } = useAnnonces()
  useEffect(() => {
    getAllAnnonces().then(res => setAnnonces(res))
  }, [])

  if (!annonces?.length) return null

  return (
    <div className=" p-3 my-4">
      <div className="d-flex flex-wrap">
        {annonces?.map(annonce => (
          <Preview key={annonce.id} {...annonce} />
        ))}
      </div>
    </div>
  )
}

export default FavPreviews
