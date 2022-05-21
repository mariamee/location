import React from 'react'
import { CATEGORIES } from 'utils/constants'
import DeleteOperation from './DeleteOperation'
import EditeOperation from './EditOperation'

const Advert = ({ annonce, setAnnonces }) => {
  const { categorie, title, id } = annonce
  const category = CATEGORIES?.find(c => c.value === categorie || c.default).label

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>
        <EditeOperation annonce={annonce} setAnnonces={setAnnonces} id={id} />
        <button type="button" className="btn btn-secondary ms-2 ps-2 pe-2">
          Archiver
        </button>
        <DeleteOperation setAnnonces={setAnnonces} id={id} />
      </td>
    </tr>
  )
}

export default Advert
