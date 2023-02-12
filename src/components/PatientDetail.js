import React from "react";

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
    </div>
  );
};

export default PatientDetail;
