import React from "react";
import PatientRecord from "./PatientRecord";

const PatientDetail = (props) => {
  return (
    <div className="row">
      <div className="col">
        {Object.keys(props.patientDetail).map((key, index) => {
          return (
            <div className="col" key={index}>
              <div className="small">
                {key}: {props.patientDetail[key]}
              </div>
            </div>
          );
        })}
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
