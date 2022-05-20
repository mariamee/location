import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import Select from 'react-select'

import { getPost } from 'services/post'
import { LOCATION_ICON } from 'utils/icons'
import Comments from './Comments'
import { RENT_DURATION } from 'utils/constants'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    if (id) getPost(id).then(post => setPost(post))
  }, [id])

  if (!post) return null
  const { title, body, rating, prix = 300, disponible = true } = post

  const ratingChanged = newRating => {}

  return (
    <div className="row">
      <div className="col-3">
        <div>
          <img className="img-fluid rounded" src="https://picsum.photos/450/450" alt="post" />
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
            <div>
              <button className="btn btn-success px-5">Reserver</button>
            </div>
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
              <h6 className="text-primary">Mariame El Alaoui</h6>
              <p>de Tetouan</p>
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
            <LOCATION_ICON /> <span className="h5">Tetouan</span>
          </div>
          <div>
            <strong className="text-danger h4">Prix. {prix} DH</strong>
          </div>
          <div>
            <h3>Description</h3>
            <p>{body}</p>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Post
