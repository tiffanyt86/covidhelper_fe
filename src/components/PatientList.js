import React from "react";
import Patient from "../components/Patient";

const PatientList = (props) => {
  const getPatientsArray = (data) => {
    return data.map((patient) => (
      <Patient
        key={patient.id}
        id={patient.id}
        first_name={patient.first_name}
        last_name={patient.last_name}
        dob={patient.dob}
        comorbidities={patient.comorbidities}
        allergies={patient.allergies}
        displayPatientDetail={props.displayPatientDetail}
        getAllPatients={props.getAllPatients}
        patientDetail={props.patientDetail}
      />
    ));
  };

  return (
    <div>
      <div className="list-group">{getPatientsArray(props.patientData)}</div>
    </div>
  );
};

export default PatientList;
