import React, { useState, useEffect } from "react";
import PatientList from "../components/PatientList";
import PatientDetail from "../components/PatientDetail";
import NewPatientForm from "../components/NewPatientForm";
import { getAllPatientsAPI, getPatientDetailAPI } from "../components/APICalls";

const PatientsMain = () => {
  const [patientData, setPatientData] = useState([]);
  const [patientDetail, setPatientDetail] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const getAllPatients = async () => {
    const data = await getAllPatientsAPI();
    setPatientData(data);
  };

  useEffect(() => {
    getAllPatients();
    setIsSubmit(false);
  }, [isSubmit]);

  const displayPatientDetail = async (id) => {
    const data = await getPatientDetailAPI(id);
    setPatientDetail(data);
  };

  return (
    <div className="container align-content-space-around">
      <div className="row">
        <div className="col">
          <h3>My Patients</h3>
          <PatientList
            patientData={patientData}
            displayPatientDetail={displayPatientDetail}
          />
        </div>
        <div className="col">
          {patientDetail && <PatientDetail patientDetail={patientDetail} />}
        </div>
      </div>
      <div className="row">
        <NewPatientForm setIsSubmit={setIsSubmit} />
      </div>
    </div>
  );
};

export default PatientsMain;
