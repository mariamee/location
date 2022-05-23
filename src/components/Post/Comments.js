import React, { useState } from 'react'

import { COMMENTS } from 'utils/constants'
import Comment from './Comment'

const Comments = ({ comments = COMMENTS }) => {
  const [newComment, setNewComment] = useState('')
  return (
    <div>
      <div className="h4 text-warning fw-bold mt-5">Commentaires</div>
      <input
        type="text"
        className="form-control"
        placeholder="Votre commentaire"
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
      />
      {comments?.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  )
}

export default Comments
