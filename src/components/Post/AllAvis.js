import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ReactStars from 'react-rating-stars-component'
import { addAvisAnnonce, getAllAvisAnnonce } from 'services/annonce'

import { STYLE_MODAL } from 'utils/constants'
import useAuth from 'hooks/useAuth'
import Avis from './Avis'
import { useParams } from 'react-router-dom'

const AllAvis = ({ enableAvis }) => {
  const { user_id, user } = useAuth()
  const { id } = useParams()

  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(5)
  const [newComment, setNewComment] = useState('')
  const [allAvis, setAllAvis] = useState([])

  useEffect(() => {
    const fetchAllAvis = async () => {
      const res = await getAllAvisAnnonce(id)
      setAllAvis(res)
    }
    fetchAllAvis()
  }, [id])

  const onClose = () => setIsOpen(false)

  const ratingChanged = newRating => {
    setRating(newRating)
  }

  const sendAvis = async () => {
    const avis = { note: rating, commentaire: newComment, client_id: user_id, annonce_id: id }
    const isAvisAdded = await addAvisAnnonce(avis)
    if (isAvisAdded) {
      const avis_res = { ...avis, client_id: [user?.user] }
      setAllAvis(prev => [...prev, avis_res])
      onClose()
    }
  }

  return (
    <>
      <div>
        <button disabled={!enableAvis} className="btn btn-primary mt-5" onClick={() => setIsOpen(true)}>
          Ajouter commentaire et note <span className="text-danger">{enableAvis ? '' : '(reservation requise)'}</span>
        </button>
        <div className="h4 text-warning fw-bold">Commentaires</div>
        {allAvis?.map(avis => (
          <Avis key={avis.id} {...avis} />
        ))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={STYLE_MODAL} contentLabel="Example Modal">
        <div className="">
          <label htmlFor="comment">Votre commentaire</label>
          <input
            id="comment"
            className="form-control"
            placeholder="Votre commentaire"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
        </div>
        <ReactStars value={rating} count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
        <button className="btn btn-success" onClick={sendAvis}>
          Envoyer Avis
        </button>
      </Modal>
    </>
  )
}

export default AllAvis
