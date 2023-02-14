import React from "react";
import { deleteRecordAPI } from "./APICalls";

const VaccinationLogEntry = (props) => {
  const handleDeleteRecord = async () => {
    await deleteRecordAPI(props.id);
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

// {
//   /* <div className="card bg-light mb-3">
//   <div className="card-header">{props.patientDetails.first_name}'s Vaccine Record</div>
//   <div className="card-body">
//     <h5 className="card-title">{props.vaccine.name}</h5>
//     <p className="card-text">Date Administered: {props.date_administered}</p>
//   </div>
// </div> */
// }
