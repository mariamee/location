import React from 'react'
import { toast } from 'react-toastify'
import { archiveAnnonce } from 'services/annonce'

const ArchiveOperation = ({ id, annonce, setAnnonces }) => {
  const { status } = annonce
  const onArchive = async () => {
    const isArchived = await archiveAnnonce(id, { ...annonce, status: status == 1 ? 0 : 1 })
    if (isArchived) {
      setAnnonces(annonces => annonces.map(a => (a.id !== id ? a : { ...a, status: status == 1 ? 0 : 1 })))
      toast.success('Annonce archived')
    }
  }

  return (
    <button className="btn btn-info ms-2 ps-2 pe-2" onClick={onArchive}>
      {status == 1 ? 'Archiver' : 'Désarchiver'}
    </button>
  )
}

export default ArchiveOperation
