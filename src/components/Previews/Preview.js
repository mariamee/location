import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from 'utils'

import { HEART_ICON } from 'utils/icons'

const Preview = ({ title, prix, image, id, ville }) => {
  return (
    <Link to={`/post/${id}`} className="ms-2 no_decoration">
      <div type="button" className="mx-2 border border-dark rounded-3 px-3 pt-3 m-2 bg-light shadow">
        <div className="position-relative">
          <img
            src={getImage(image) || '/no_image.jpeg'}
            alt={title}
            className="card-img-top border border-2 border-dark rounded-3"
            style={{ width: '10rem', height: '10rem' }}
          />
          <div className="position-absolute top-0 end-0">
            <HEART_ICON className="bg-primary" />
          </div>
        </div>
        <div className="card-body text-center text-dark">
          <p className="card-text">{title}</p>
          <p className="card-text h5">
            <span className="text-primary">{prix}</span> DH/jour
          </p>
          <p className="card-text">{ville}</p>
        </div>
      </div>
    </Link>
  )
}

export default Preview

// 'particulier_id',
// 'categorie',
// 'marque',
// 'prix',
// 'ville',
// 'title',
// 'description',
// 'date_debut',
// 'date_fin',
// 'date_pub',
// 'disponibilite',
// 'status'
