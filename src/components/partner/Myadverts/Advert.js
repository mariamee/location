import React from 'react'
import { CATEGORIES } from 'utils/constants'
import ArchiveOperation from './ArchiveOperation'
import DeleteOperation from './DeleteOperation'
import EditeOperation from './EditOperation'
import ReservationsOperation from './ReservationsOperation'

const Advert = ({ annonce, setAnnonces, reservations, setReservations }) => {
  const { categorie, title, id } = annonce
  const category = CATEGORIES?.find(c => c.value === categorie || c.default).label
  const annonce_reservations = reservations?.filter(reservation => reservation.annonce_id === id)

  return (
    <tr key={id} className={annonce.status == 0 ? 'bg-secondary text-light' : ''}>
      <td>{id}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>
        <EditeOperation annonce={annonce} setAnnonces={setAnnonces} id={id} />

        <ArchiveOperation id={id} setAnnonces={setAnnonces} annonce={annonce} />
        <DeleteOperation setAnnonces={setAnnonces} id={id} />
        {!!annonce_reservations?.length && (
          <ReservationsOperation {...{ reservations: annonce_reservations, setReservations, setAnnonces, id }} />
        )}
      </td>
    </tr>
  )
}

export default Advert
