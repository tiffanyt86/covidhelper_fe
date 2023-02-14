import React from "react";
import { deleteRecordAPI, getVaccineRecordAPI } from "./APICalls";

const VaccinationLogEntry = (props) => {
  const handleDeleteRecord = async () => {
    await deleteRecordAPI(props.id);
    getPatientRecords(props.patient_id);
  };

  const getPatientRecords = async (id) => {
    const data = await getVaccineRecordAPI(id);
    props.setVaccineRecord(data);
  };

  return (
    <div className="card-body">
      <div className="card-title font-weight-bold">{props.vaccine.name}</div>
      Date Administered: {props.date_administered}
      <div className="card-text-sml"></div>
      <button onClick={handleDeleteRecord}>Remove</button>
      {props.patient_id}
    </div>
  );
};

export default VaccinationLogEntry;
