import React from 'react'

import { ADS } from '../../utils/constants'
import Advert from './Advert'

const Adverts = () => {
  return (
    <div className="border border-dark rounded p-3 my-4">
      <h2>Annonces Premium</h2>
      <div className="d-flex">
        {ADS?.map(ad => (
          <Advert key={ad.id} {...ad} />
        ))}
      </div>
    </div>
  )
}

export default Adverts
