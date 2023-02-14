import React from "react";
import { deleteRecordAPI, getVaccineRecordAPI } from "./APICalls";

const VaccinationLogEntry = (props) => {
  const handleDeleteRecord = async () => {
    await deleteRecordAPI(props.id);
    props.displayPatientDetail(props.patient_id);
  };

  return (
    <div className="card-body">
      <h6>{props.vaccine.name}</h6>
      <text className="card-text-sml-pr-3 mr-2">
        Date Administered: {props.date_administered}
      </text>
      <button
        onClick={handleDeleteRecord}
        className="btn btn-outline-danger btn-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default VaccinationLogEntry;
