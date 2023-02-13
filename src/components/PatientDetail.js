import React from "react";
import PatientRecord from "./PatientRecord";

const PatientDetail = (props) => {
  return (
    <div className="container">
      <h3 className="col">Patient Details</h3>
      {Object.keys(props.patientDetail).map((key, index) => {
        return (
          <div className="col" key={index}>
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
