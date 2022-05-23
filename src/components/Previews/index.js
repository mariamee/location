import React, { useEffect } from 'react'

import useAnnonces from 'hooks/useAnnonces'
import Preview from './Preview'
import { getAllAnnonces } from 'services/annonce'

const Previews = () => {
  const { annonces, setAnnonces } = useAnnonces()
  useEffect(() => {
    getAllAnnonces().then(res => setAnnonces(res))
  }, [])

  if (!annonces.length) return null

  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>A louer</h2>
      <div className="d-flex flex-wrap">
        {annonces?.map(annonce => (
          <Preview key={annonce.id} {...annonce} />
        ))}
      </div>
    </div>
  )
}

export default Previews
