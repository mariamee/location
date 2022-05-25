import React, { useState } from 'react'
import Modal from 'react-modal'
import { acceptReservation, refuseReservation } from 'services/reservation'

import { STYLE_MODAL } from 'utils/constants'
// import useAuth from 'hooks/useAuth'

const ReservationsOperation = ({ reservations, setReservations }) => {
  const [isOpen, setIsOpen] = useState(false)
  //   const { user } = useAuth()

  const onClose = () => {
    setIsOpen(false)
  }

  const onAccept = async reservation_id => {
    const isAccepted = await acceptReservation(reservation_id)
    if (isAccepted) {
      setReservations(reservations => reservations.filter(reservation => reservation.id !== reservation_id))
      setIsOpen(false)
    }
  }
  const onRefuse = async reservation_id => {
    const isRefused = await refuseReservation(reservation_id)
    if (isRefused) {
      setReservations(reservations => reservations.filter(reservation => reservation.id !== reservation_id))
      setIsOpen(false)
    }
  }
  return (
    <>
      <button className="btn btn-outline-warning ms-2  btn-sm" onClick={() => setIsOpen(true)}>
        Reservations
      </button>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={STYLE_MODAL} contentLabel="Example Modal">
        <div className="">
          {reservations?.map(reservation => (
            <div className="">
              <span className="h3">Client ID </span>
              <span className="text-light bg-info me-5 h3 p-2">{reservation.client_id}</span>
              <span className="text-primary me-2">Debut</span>
              <span className="text-primary me-2">{reservation?.date_debut}</span>
              <span className="text-danger me-2">Fin</span>
              <span className="text-danger me-2">{reservation?.date_fin}</span>
              <button className="btn btn-success btn-sm" onClick={() => onAccept(reservation.id)}>
                Accepter
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onRefuse(reservation.id)}>
                Refuser
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ReservationsOperation
