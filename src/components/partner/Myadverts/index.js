import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyAnnonces } from 'services/annonce'

import Advert from './Advert'

const Myadverts = () => {
  const [annonces, setAnnonces] = useState([])
  useEffect(() => {
    getMyAnnonces().then(_annonces => setAnnonces(_annonces))
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-start align-items-center p-2 shadow bg-light ">
        <img src="https://i.imgur.com/JxqDbJN.png" alt="my annonces" />
        <div className="text-align h5 py-2 ps-5">Mes annonces</div>
        <div></div>
      </div>
      <div>
        <Link to="/newadvert">
          <button type="button" className="btn btn-info mt-5">
            + Créer une nouvelle annonce
          </button>
        </Link>
      </div>
      <div className="align-items-center shadow mt-5 ">
        <table className="table">
          <thead className="table-warning ">
            <tr>
              <th scope="col">ID Annonce</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Titre</th>
              <th scope="col">Opérations</th>
            </tr>
          </thead>
          <tbody>
            {annonces?.map(annonce => (
              <Advert annonce={annonce} setAnnonces={setAnnonces} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Myadverts
