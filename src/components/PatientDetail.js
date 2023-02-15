import React from "react";
import PatientRecord from "./PatientRecord";

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

const PatientDetail = (props) => {
  console.log(props.patientDetail);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div>Date of Birth: {props.patientDetail.dob}</div>
            <div>
              Comorbidities: {boolToWord(props.patientDetail.comorbidities)}
            </div>
            <div>Allergies: {boolToWord(props.patientDetail.allergies)}</div>
          </div>
        </div>
      </div>
      <div className="col">
        <PatientRecord
          patientDetail={props.patientDetail}
          displayPatientDetail={props.displayPatientDetail}
        />
      </div>
      <div className="col">Show if they need to get another vaccine here.</div>
    </div>
  );
};

export default PatientDetail;
