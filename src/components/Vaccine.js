import React from "react";
import { deleteVaccineAPI } from "./APICalls";

const Vaccine = (props) => {
  const handleDeleteVaccine = async () => {
    await deleteVaccineAPI(props.id);
    props.getAllVaccines();
  };
  return (
    <div className="container justify-content-center">
      <div className="row no-gutters align-items-center">
        <div className="col">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => props.displayVaccineDetail(props.id)}
          >
            {props.name}
          </button>
        </div>
        <div className="col small">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleDeleteVaccine}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
