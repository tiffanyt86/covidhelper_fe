import React, { useState, useEffect } from "react";
import PatientList from "../components/PatientList";
import PatientDetail from "../components/PatientDetail";
import NewPatientForm from "../components/NewPatientForm";
import NewRecordForm from "../components/NewRecordForm";
import { getAllPatientsAPI, getPatientDetailAPI } from "../components/APICalls";

const PatientsMain = () => {
  const [patientData, setPatientData] = useState([]); // gives list (array of objs) of all patients associated with current logged in user.
  // id, first_name, last_name, dob, comorbidities, allergies
  const [patientDetail, setPatientDetail] = useState(null); // stores details of currently selected patient.  Same attributes as above but for one single pt
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
            getAllPatients={getAllPatients}
            patientDetail={patientDetail}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NewPatientForm setIsSubmit={setIsSubmit} />
        </div>
      </div>
      <div className="row">
        <NewRecordForm
          setIsSubmit={setIsSubmit}
          patient={patientDetail}
          displayPatientDetail={displayPatientDetail}
        />
      </div>
    </div>
  );
};

export default PatientsMain;
