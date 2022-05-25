import Preview from 'components/Previews/Preview'
import React, { useEffect, useState } from 'react'
import { getPremiumAnnonces } from 'services/annonce'

// import { ADS } from '../../utils/constants'
import Advert from './Advert'

const Adverts = () => {
  const [premAnnonces, setPremAnnonces] = useState([])

  useEffect(() => {
    getPremiumAnnonces().then(res => setPremAnnonces(res))
  }, [])

  return (
    <div className="border border-dark rounded p-3 my-4">
      <div className=" text-warning font-italic h2">Annonces Premium</div>
      <div className="d-flex">
        {premAnnonces?.map(ad => (
          <Preview key={ad.id} {...ad} />
        ))}
      </div>
    </div>
  )
}

export default Adverts
