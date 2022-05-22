import React from 'react'
import { CATEGORIES } from 'utils/constants'
import ArchiveOperation from './ArchiveOperation'
import DeleteOperation from './DeleteOperation'
import EditeOperation from './EditOperation'

const Advert = ({ annonce, setAnnonces }) => {
  const { categorie, title, id } = annonce
  const category = CATEGORIES?.find(c => c.value === categorie || c.default).label

  return (
    <tr key={id} className={annonce.status == 0 ? 'bg-secondary text-light' : ''}>
      <td>{id}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>
        <EditeOperation annonce={annonce} setAnnonces={setAnnonces} id={id} />
        {/* <button type="button" className="btn btn-secondary ms-2 ps-2 pe-2">
          Archiver
        </button> */}
        <ArchiveOperation id={id} setAnnonces={setAnnonces} annonce={annonce} />
        <DeleteOperation setAnnonces={setAnnonces} id={id} />
      </td>
    </tr>
  )
}

export default Advert
