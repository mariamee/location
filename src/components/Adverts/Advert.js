import React from 'react'

const Advert = ({ title, image, price }) => {
  return (
    <div className="mx-2" type="button">
      <img
        src={image}
        alt={title}
        className="card-img-top border border-2 border-dark rounded-3"
        style={{ width: '10rem', height: '10rem' }}
      />
      <div className="card-body text-center">
        <p className="card-text">{title}</p>
      </div>
    </div>
  )
}

export default Advert
