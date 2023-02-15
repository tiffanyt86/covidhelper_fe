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
            className="list-group-item list-group-item-light list-group-item-action pr-0 py-2"
            onClick={() => props.displayVaccineDetail(props.id)}
          >
            {props.name}
          </button>
        </div>
        <div className="col small">
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
    </div>
  );
};

export default Vaccine;
