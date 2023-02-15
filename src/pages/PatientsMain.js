import React, { useState, useEffect } from "react";
import PatientList from "../components/PatientList";
import NewPatientForm from "../components/NewPatientForm";
import NewRecordForm from "../components/NewRecordForm";
import { getAllPatientsAPI, getPatientDetailAPI } from "../components/APICalls";

const PatientsMain = () => {
  const [patientData, setPatientData] = useState([]); // gives list (array of objs) of all patients associated with current logged in user.
  // id, first_name, last_name, dob, comorbidities, allergies
  const [patientDetail, setPatientDetail] = useState([]); // stores details of currently selected patient.  Same attributes as above but for one single pt
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [showRecordForm, setShowRecordForm] = useState(false);

  const handleShowPatientForm = (event) => {
    setShowPatientForm(!showPatientForm);
    event.prevent.default();
  };

  const handleShowRecordForm = (event) => {
    setShowRecordForm(!showRecordForm);
    event.prevent.default();
  };

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
          <div
            onClick={handleShowPatientForm}
            type="button"
            className="badge text-primary"
          >
            Add Patient
          </div>
          <div
            onClick={handleShowRecordForm}
            type="button"
            className="badge text-primary"
          >
            | Add Vaccine Record
          </div>

          <h3>My Patients</h3>
          <PatientList
            patientData={patientData}
            displayPatientDetail={displayPatientDetail}
            getAllPatients={getAllPatients}
            patientDetail={patientDetail}
          />
        </div>
      </div>
      <p></p>
      <div className="row">
        {showPatientForm && (
          <div className="col">
            <NewPatientForm setIsSubmit={setIsSubmit} />
          </div>
        )}

        {showRecordForm && (
          <div className="col">
            <NewRecordForm
              setIsSubmit={setIsSubmit}
              patient={patientDetail}
              displayPatientDetail={displayPatientDetail}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsMain;
