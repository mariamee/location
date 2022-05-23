import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Avis = ({ commentaire, note, client_id }) => {
  const { name, photo, ville } = client_id?.[0] || {}
  return (
    <div className="d-flex align-items-start border p-2">
      <img src={photo || '/no_image.jpeg'} className="rounded-circle mr-2" alt="user" width={40} height={40} />
      <div className="media-body ms-2">
        <h6 className="text-primary">
          {name} de {ville}
        </h6>
        <p>{commentaire}</p>
      </div>
      <ReactStars value={note} count={5} size={24} activeColor="#ffd700" edit={false} />
    </div>
  )
}

export default Avis
