import React from "react";
import { deletePatientAPI } from "./APICalls";

const Patient = (props) => {
  const handleDeletePatient = async () => {
    await deletePatientAPI(props.id);
    props.getAllPatients();
  };

  return (
    <div className="container justify-content-center">
      <div className="row no-gutters align-items-center">
        <div className="col">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => props.displayPatientDetail(props.id)}
          >
            {props.last_name}, {props.first_name}
          </button>
        </div>
        <div className="col small">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleDeletePatient}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patient;
