import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import Select from 'react-select'

import { LOCATION_ICON } from 'utils/icons'
import Comments from './Comments'
import { RENT_DURATION } from 'utils/constants'
import { getAnnonceDetail, getUserAnnonceOwner, reserveAnnonce } from 'services/annonce'
import { getImage } from 'utils'
import useAuth from 'hooks/useAuth'
import { getDetailReservation, getMyReservations } from 'services/reservation'

const Post = () => {
  const { id } = useParams()
  const { isClient, user_id } = useAuth()
  const [annonce, setAnnonce] = useState(null)
  const [userAnnonce, setUserAnnonce] = useState(null)
  const [reservationDetail, setReservationDetail] = useState(null)
  const particulier_id = annonce?.particulier_id

  // const status_reservation = reservationDetail?.status
  const status_reservation = reservationDetail?.find(r => r.client_id === user_id)?.status
  const reservation_count = reservationDetail?.length

  useEffect(() => {
    if (id) {
      getAnnonceDetail(id).then(post => setAnnonce(post))
      getDetailReservation(id).then(res => setReservationDetail(res))
    }
  }, [id])
  useEffect(() => {
    if (particulier_id) {
      getUserAnnonceOwner(particulier_id).then(user => setUserAnnonce(user))
    }
  }, [particulier_id])

  if (!annonce) return null
  const { title, description, rating, prix = 300, disponible = true, ville, image, date_debut, date_fin } = annonce

  const ratingChanged = newRating => {}

  const onReserve = async () => {
    const reservation = { annonce_id: id, date_debut, date_fin }
    const isReserved = await reserveAnnonce(reservation)
    if (isReserved) {
      getDetailReservation(id).then(res => setReservationDetail(res))
    }
  }

  return (
    <div className="row">
      <div className="col-3">
        <div>
          <img className="img-fluid rounded" src={getImage(image) || '/no_image.jpeg'} alt="post" />
        </div>
        <div className="mt-2 border p-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci.</p>
          <span className="h5 text-danger">{prix} DH</span>
          <div className="d-flex align-items-center">
            <div className="flex-fill">
              <span className={'text-' + (disponible ? 'success' : 'danger')}>{disponible ? '' : 'Non '}Disponible</span>
            </div>

            <Select className="flex-fill" placeholder="Durée" id="disponibity" options={RENT_DURATION} />
          </div>
          <div className="p-2 text-center">
            <div>
              <button className="btn btn-primary my-3">Ajouter au favoris</button>
            </div>
            {isClient && (
              <div>
                <button className="btn btn-success px-5" onClick={onReserve}>
                  {status_reservation || 'Reserver'} {reservation_count && <strong className="text-warning">{reservation_count}</strong>}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 p-2 border">
          <h4>Annonce de:</h4>
          <div className="d-flex align-items-start">
            <img
              className="img-fluid rounded-circle"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="user"
              width={80}
              height={80}
            />
            <div className="media-body ms-2 d-flex flex-column justify-content-cetner align-items-center">
              <h6 className="text-primary">{userAnnonce?.name}</h6>
              <p>de {userAnnonce?.ville}</p>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-secondary">Message</button>
          </div>
        </div>
      </div>
      <div className="col-9">
        <div className="border rounded p-3 shadow-lg bg-light">
          <h3>{title}</h3>
          <ReactStars value={rating || 2} count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
          <div className="d-flex align-items-start">
            <LOCATION_ICON /> <span className="h5">{ville}</span>
          </div>
          <div>
            <strong className="text-danger h4">Prix. {prix} DH</strong>
          </div>
          <div>
            <h3>Description</h3>

            <p>{description}</p>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Post
