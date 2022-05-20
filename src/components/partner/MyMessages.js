import React from 'react'
import { Link } from 'react-router-dom'
import { ARROW } from '../../utils/icons'
const MyMesages = () => {
  return (
    <div>
      <div>
        <form className="border border-warning rounded pe-5 py-2  mx-auto d-flex justify-content-between">
          <div>
            <ARROW />
          </div>
          <div className="text-center  h4">Mes Messages </div>
        </form>
      </div>
      <div className="py-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Partenaire</th>
              <th scope="col">Sujet</th>
              <th scope="col">Date Envoie</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">*****</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyMesages
