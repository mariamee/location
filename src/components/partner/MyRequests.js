import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Response from "./Response";

const MyRequests = () => {
  return (
    <div>
      <div className="d-flex justify-content-start align-items-center p-2 shadow bg-light ">
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-request-advertising-agency-flaticons-lineal-color-flat-icons-2.png" />
        <div className="text-align h5 py-2 ps-5"> Mes Demandes</div>
        <div></div>
      </div>
      <div className="align-items-center shadow mt-5 ">
        <table className="table">
          <thead className="table-warning ">
            <tr>
              <th scope="col">Titre d'annonce</th>
              <th scope="col">Client</th>
              <th scope="col">Réponse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>melalaoui19</td>
              <td>
                <Response />
              </td>
            </tr>

            <tr>
              <th scope="row">02</th>
              <td></td>
              <td>
                <Response />
              </td>
            </tr>

            <tr>
              <th scope="row">03</th>
              <td></td>
              <td>
                <Response />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequests;
