import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import { LOCATION_ICON } from 'utils/icons'
import AllAvis from './AllAvis'
import { RENT_DURATION } from 'utils/constants'
import { getAnnonceDetail, getUserAnnonceOwner, reserveAnnonce } from 'services/annonce'
import { getImage } from 'utils'
import useAuth from 'hooks/useAuth'
import { getDetailReservation } from 'services/reservation'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50%',
  },
}

const Post = () => {
  const { id } = useParams()
  const { isClient, user_id, isPartner } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [annonce, setAnnonce] = useState(null)
  const [userAnnonce, setUserAnnonce] = useState(null)
  const [reservationDetail, setReservationDetail] = useState(null)
  const [date_debut_reservation, setDate_debut_reservation] = useState(new Date())
  const [date_fin_reservation, setDate_fin_reservation] = useState(new Date())
  const particulier_id = annonce?.particulier_id

  const reservedAnnonce = reservationDetail?.find(r => r.status === 'accepter')
  const status_reservation = reservationDetail?.find(r => r.client_id === user_id)?.status
  const reservation_count = reservationDetail?.length
  const isReservedByMe = status_reservation === 'accepter'

  const isPartnerAnnonce = isPartner && particulier_id === user_id
  const enableAvis = new Date(reservedAnnonce?.date_fin).getTime() < new Date().getTime() && (isPartnerAnnonce || isReservedByMe)
  const enableReserveButton = !reservedAnnonce && status_reservation !== 'en attente' && reservation_count < 3

  useEffect(() => {
    if (id) {
      getAnnonceDetail(id).then(post => setAnnonce(post))
      getDetailReservation(id).then(res => setReservationDetail(res))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  useEffect(() => {
    if (particulier_id) {
      getUserAnnonceOwner(particulier_id).then(user => setUserAnnonce(user))
    }
  }, [particulier_id])

  if (!annonce) return null
  const { title, description, prix, disponible = 1, ville, image } = annonce

  const onReserve = async () => {
    const reservation = {
      annonce_id: id,
      date_debut: moment(date_debut_reservation).format('YYYY-MM-DD'),
      date_fin: moment(date_fin_reservation).format('YYYY-MM-DD'),
    }
    const isReserved = await reserveAnnonce(reservation)
    if (isReserved) {
      setIsOpen(false)
      getDetailReservation(id).then(res => setReservationDetail(res))
    }
  }

  const onClose = () => setIsOpen(false)

  return (
    <div className="container">
      <h3>{title}</h3>
      <div className="row">
        <div className="flex">
          <div>
            <img className="img-fluid rounded" src={getImage(image) || '/no_image.jpeg'} alt="post" />
            <div className=" ">
              <div className="mt-5 h4 fw-bold text-warning ">Description</div>
              <h5>
                <p>{description}</p>
              </h5>
              <AllAvis enableAvis={enableAvis} />
            </div>
          </div>
          <div className="d-flex align-items-start">
            <LOCATION_ICON /> <span className="h5">{ville}</span>
          </div>
          <div className="mt-2 border p-2">
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
                  <button disabled={!enableReserveButton} className="btn btn-success px-5" onClick={() => setIsOpen(true)}>
                    {status_reservation || 'Reserver'} {reservation_count && <strong className="text-warning">{reservation_count}</strong>}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mt-2 p-2 border">
            <h4>Annonce de:</h4>
            <div className="d-flex align-items-start">
              <div className="media-body ms-2 d-flex flex-column justify-content-cetner align-items-center">
                <h6 className="text-primary">{userAnnonce?.name}</h6>
                <h6>
                  <p>de {userAnnonce?.ville}</p>
                </h6>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-secondary mt-2">Message</button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} contentLabel="Example Modal">
        <div className="d-fex align-items-end h-100">
          <div className="d-flex justify-content-around mb-5">
            <div className=" flex-column pt-2 ms-0 ">
              <label htmlFor="date_debut">Date debut</label>
              <DatePicker selected={date_debut_reservation} onChange={date => setDate_debut_reservation(date)} />
            </div>
            <div className="mt-2 ml-0 flex">
              <label htmlFor="date_fin">Date fin</label>
              <DatePicker selected={date_fin_reservation} onChange={date => setDate_fin_reservation(date)} />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-success" onClick={onReserve}>
              Reserver
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Post
