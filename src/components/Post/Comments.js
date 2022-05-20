import React, { useState } from 'react'

import { COMMENTS } from 'utils/constants'
import Comment from './Comment'

const Comments = ({ comments = COMMENTS }) => {
  const [newComment, setNewComment] = useState('')
  return (
    <div>
      <h3>Commentaires</h3>
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
