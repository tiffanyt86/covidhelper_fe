import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";

const PatientRecord = (props) => {
  const [patientRecord, setPatientRecord] = useState([]);
  const [vaccineRecord, setVaccineRecord] = useState([]);

  const getPatientRecords = async () => {
    const data = await getVaccineRecordAPI();
    // console.log(props.patientDetail.id);
    const find_id = data.filter(
      (d) => (d.patient_id = props.patientDetail.id)
    )[0];
    console.log(find_id);
    setPatientRecord(find_id);

    await getVaccineDetail(find_id.vaccine_id);
  };

  const getVaccineDetail = async (id) => {
    const data = await getPatientVaccineDetailAPI(id);
    setVaccineRecord(data);
  };

  // console.log(vaccineRecord.name);

  // const getPatientVaccineDetail = async () => {
  //   const data = await getPatientVaccineDetailAPI(patientRecord.vaccine_id);
  //   setVaccineRecord(data);
  // };

  useEffect(() => {
    getPatientRecords();

    // if (isLoading === false) {
    //   getVaccineDetail();
    //   setLoading(true);
  }, [props.patientDetail]);

  return (
    <div>
      <h3>Patient Vaccination Record</h3>
      {Object.keys(patientRecord).map((key, index) => {
        return (
          <div key={index}>
            <div className="small">
              {key}: {patientRecord[key]}
            </div>
          </div>
        );
      })}
      <p></p>
      {vaccineRecord.name}
    </div>
  );
};

export default PatientRecord;
