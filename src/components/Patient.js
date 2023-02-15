import React, { useState } from "react";
import { deletePatientAPI } from "./APICalls";
import PatientDetail from "./PatientDetail";

const Patient = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    console.log(props.id);
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
            className="list-group-item list-group-item-secondary list-group-item-action mr-1 py-2"
            onClick={handleClicked}
          >
            {props.last_name}, {props.first_name}
            <span className="badge badge-pill badge-light mx-3">
              Up to date on all vaccines!
            </span>
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
      <div>
        {isClicked && (
          <PatientDetail
            patientDetail={props.patientDetail}
            displayPatientDetail={props.displayPatientDetail}
          />
        )}
      </div>
    </div>
  );
};

export default Patient;
