import React, { useState } from "react";
import { deletePatientAPI } from "./APICalls";
import PatientDetail from "./PatientDetail";

const Patient = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    props.displayPatientDetail(props.id);
    setIsClicked(!isClicked);
  };

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
            onClick={handleClicked}
          >
            {props.last_name}, {props.first_name}
          </button>
        </div>
        <div className="col small">
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleDeletePatient}
          >
            X
          </button>
        </div>
      </div>
      {isClicked && (
        <PatientDetail
          patientDetail={props.patientDetail}
          displayPatientDetail={props.displayPatientDetail}
        />
      )}
    </div>
  );
};

export default Patient;
