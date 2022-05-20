import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

import { deleteAnnonce, getMyAnnonces } from 'services/annonce'
import { CATEGORIES } from 'utils/constants'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Myadverts = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [annonces, setAnnonces] = useState([])
  useEffect(() => {
    getMyAnnonces().then(_annonces => setAnnonces(_annonces))
  }, [])

  const handleDeleteAnnonce = async id => {
    setLoadingDelete(true)
    const isDeleted = await deleteAnnonce(id)
    setLoadingDelete(false)
    if (isDeleted) {
      setIsDeleteModalOpen(false)
      setAnnonces(annonces.filter(annonce => annonce.id !== id))
    }
  }

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
            {annonces?.map(({ categorie, title, id }) => {
              const category = CATEGORIES?.find(c => c.value === categorie || c.default).label
              return (
                <>
                  <Modal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={() => setIsDeleteModalOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="m-3">
                      <div className="h3 text-danger mb-3">Vous voulez vraiment supprimer cette annonce?</div>
                      <div className="d-flex w-100 justify-content-center">
                        <button disabled={loadingDelete} className="btn btn-success px-3 me-2" onClick={() => handleDeleteAnnonce(id)}>
                          Oui
                        </button>
                        <button className="btn btn-danger px-5" onClick={() => setIsDeleteModalOpen(false)}>
                          Non
                        </button>
                      </div>
                    </div>
                  </Modal>
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{category}</td>
                    <td>{title}</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Modifier
                      </button>
                      <button type="button" className="btn btn-secondary ms-2 ps-2 pe-2">
                        Archiver
                      </button>
                      <button type="button" className="btn btn-danger ms-2 ps-2 pe-2" onClick={() => setIsDeleteModalOpen(true)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Myadverts
