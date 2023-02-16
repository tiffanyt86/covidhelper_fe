import React from "react";
import { deleteVaccineAPI } from "./APICalls";

import "./vaccine.css";

const Vaccine = (props) => {
  const handleDeleteVaccine = async () => {
    await deleteVaccineAPI(props.id);
    props.getAllVaccines();
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10">
          <button
            type="button"
            className="xsmall list-group-item btn-sm list-group-item-light list-group-item-action pr-0 py-2"
            onClick={() => props.displayVaccineDetail(props.id)}
          >
            {props.name}
          </button>
        </div>
        <small>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleDeleteVaccine}
          >
            x
          </button>
        </small>
      </div>
    </div>
  );
};

export default Vaccine;
