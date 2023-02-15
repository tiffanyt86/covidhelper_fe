import React from "react";
import { deleteRecordAPI, getVaccineRecordAPI } from "./APICalls";

const VaccinationLogEntry = (props) => {
  const handleDeleteRecord = async () => {
    await deleteRecordAPI(props.id);
    props.displayPatientDetail(props.patient_id);
  };

  return (
    <div className="card-body mx-1 px-2 py-2 ">
      <h6>{props.vaccine.name}</h6>
      <text className="card-text-sml pr-3 mr-2">
        <small>Date Administered: {props.date_administered}</small>
      </text>
      <button
        onClick={handleDeleteRecord}
        className="btn btn-outline-danger btn-sm my-0 py-0"
      >
        <small>Remove</small>
      </button>
    </div>
  );
};

export default VaccinationLogEntry;
