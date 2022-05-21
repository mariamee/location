import React, { useState } from 'react'
import Modal from 'react-modal'

import { deleteAnnonce } from 'services/annonce'
import { STYLE_MODAL } from 'utils/constants'

const DeleteOperation = ({ id, setAnnonces }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDeleteAnnonce = async id => {
    setLoading(true)
    const isDeleted = await deleteAnnonce(id)
    setLoading(false)
    if (isDeleted) {
      setIsOpen(false)
      setAnnonces(annonces => annonces.filter(annonce => annonce.id !== id))
    }
  }

  return (
    <>
      <button type="button" className="btn btn-danger ms-2 ps-2 pe-2" onClick={() => setIsOpen(true)}>
        Supprimer
      </button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={STYLE_MODAL} contentLabel="Example Modal">
        <div className="m-3">
          <div className="h3 text-danger mb-3">Vous voulez vraiment supprimer l'annonce d'ID {id}?</div>
          <div className="d-flex w-100 justify-content-center">
            <button disabled={loading} className="btn btn-success px-3 me-2" onClick={() => handleDeleteAnnonce(id)}>
              Oui
            </button>
            <button className="btn btn-danger px-5" onClick={() => setIsOpen(false)}>
              Non
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeleteOperation
