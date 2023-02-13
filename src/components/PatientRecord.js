import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";
import Thing from "./Thing";

const PatientRecord = (props) => {
  const [patientRecord, setPatientRecord] = useState([]);
  const [vaccineRecord, setVaccineRecord] = useState([]);
  const [vaccineName, setVaccineName] = useState([]);

  const getPatientRecords = async () => {
    const data = await getVaccineRecordAPI();
    let newArray = data.filter((pt) => {
      return pt.patient_id === props.patientDetail.id;
    });
    setPatientRecord(newArray);

    const newvac = await getVaccineDetail(newArray[0].vaccine_id);
  };

  const getVaccineDetail = async (id) => {
    const data = await getPatientVaccineDetailAPI(id);
    setVaccineRecord(data);
  };

  useEffect(() => {
    getPatientRecords();
  }, [props.patientDetail]);

  console.log(vaccineName);

  const getVaccinesArray = (data) => {
    return data.map((patient) => (
      <Thing
        key={patient.id}
        id={patient.id}
        date_administered={patient.date_administered}
        vaccine_id={patient.vaccine_id}
        patient_id={patient.patient_id}
        vaccine_name={vaccineRecord}
      />
    ));
  };

  // const getVaccineNameArray = (data) => {
  //   return data.map((vaccine) => (
  //     <Thing
  //       key={vaccine.id}
  //       id={vaccine.id}
  //       date_administered={patient.date_administered}
  //       vaccine_id={patient.vaccine_id}
  //       patient_id={patient.patient_id}
  //     />
  //   ));
  // };

  return (
    <div>
      <h3>Patient Vaccination Record</h3>
      {getVaccinesArray(patientRecord)}
      <p></p>
    </div>
  );
};

export default PatientRecord;
