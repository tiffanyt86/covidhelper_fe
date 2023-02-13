import React from "react";
import PatientRecord from "./PatientRecord";

const PatientDetail = (props) => {
  return (
    <div>
      <h3>Patient Details</h3>
      {Object.keys(props.patientDetail).map((key, index) => {
        return (
          <div key={index}>
            <div className="small">
              {key}: {props.patientDetail[key]}
            </div>
          </div>
        );
      })}
      <p></p>
      <PatientRecord patientDetail={props.patientDetail} />
    </div>
  );
};

export default PatientDetail;
