import React, { useState, useEffect } from "react";
import PatientList from "../components/PatientList";
import PatientDetail from "../components/PatientDetail";
import NewPatientForm from "../components/NewPatientForm";
import { getAllPatientsAPI } from "../components/APICalls";

const PatientsMain = () => {
  const [patientData, setPatientData] = useState([]);
  const [patientDetail, setPatientDetail] = useState(null);

  const getAllPatients = async () => {
    const data = await getAllPatientsAPI();
    setPatientData(data);
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <div className="container align-content-space-around">
      Patients Page
      <div className="row">
        <div className="col">
          <h3>My Patients</h3>
          <PatientList
            patientData={patientData}
            // getAllPatients={getAllPatients}
          />
        </div>

        <PatientDetail />
      </div>
      <div className="row">
        <NewPatientForm />
      </div>
    </div>
  );
};

export default PatientsMain;
