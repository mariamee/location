import React from 'react'
import { HEART } from 'utils/icons'
import { Link } from 'react-router-dom'
import { getImage } from 'utils'
import { addNewFavoris } from 'services/favoris'

// import { HEART_ICON } from 'utils/icons'

const Preview = ({ title, prix, image, id, ville }) => {
  const onAddToFavoris = async () => {
    addNewFavoris(id)
  }

  return (
    <div className="mx-2 border border-dark rounded-3 px-3 pt-3 m-2 bg-light shadow">
      <Link to={`/post/${id}`} className="ms-2 no_decoration">
        <div type="button">
          <div className="position-relative text-center">
            <img
              src={getImage(image) || '/no_image.jpeg'}
              alt={title}
              className="card-img-top  rounded-3"
              style={{ width: '10rem', height: '10rem' }}
            />
            {/* <div className="position-absolute top-0 end-0">
            <HEART_ICON className="bg-primary" />
          </div> */}
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
      <button className="btn btn-danger fw-bold h2 text-light mt-2" onClick={onAddToFavoris}>
        + Ajouter au favoris <HEART />
      </button>
    </div>
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
