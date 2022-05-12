import React from "react";
import Select from "react-select";

const Operations = () => {
    return (
      <div className="d-flex">
          <button type="button" className="btn btn-success" href="modifyadvert">Modifier</button>
          <button type="button" className="btn btn-secondary ms-2 ps-2 pe-2">Archiver</button>
          <button type="button" className="btn btn-danger ms-2 ps-2 pe-2">Supprimer</button>
      </div>
  );
  };
  export default Operations;