import React from 'react'
import { HEART } from 'utils/icons'
import { Link } from 'react-router-dom'
import { getImage } from 'utils'
import { addNewFavoris } from 'services/favoris'
import { useLocation } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
// import { HEART_ICON } from 'utils/icons'

const Preview = ({ title, prix, image, id, ville, isFavoris, setFavAnnonces }) => {
  const { isClient } = useAuth()
  const location = useLocation()
  const isFavorisPath = location?.pathname === '/favorite'

  const onAddToFavoris = async () => {
    if (!isFavoris) {
      const idAdded = await addNewFavoris(id)
      if (idAdded) {
        setFavAnnonces(prev => [...prev, idAdded])
      }
    }
  }

  return (
    <div className="mx-2 border border-dark rounded-3 px-3 pt-3 m-2 bg-light shadow" style={{ width: 250 }}>
      <Link to={`/post/${id}`} className="ms-2 no_decoration">
        <div type="button">
          <div className="position-relative text-center">
            <img
              src={getImage(image) || '/no_image.jpeg'}
              alt={title}
              className="card-img-top  rounded-3"
              style={{ width: '10rem', height: '10rem' }}
            />
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
      {!isFavorisPath && isClient && (
        <button className={'btn w-100 fw-bold h2 text-light mt-2 btn-' + (isFavoris ? 'danger' : 'warning')} onClick={onAddToFavoris}>
          {isFavoris ? 'Favoris ' : 'Ajouter au favoris'} <HEART />
        </button>
      )}
    </div>
  )
}

export default Preview
