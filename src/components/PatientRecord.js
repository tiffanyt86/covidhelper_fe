import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";
import VaccinationLogEntry from "./VaccinationLogEntry";
import { deleteRecordAPI } from "./APICalls";

const PatientRecord = (props) => {
  const [vaccineRecord, setVaccineRecord] = useState([]);
  const [vaccineDetail, setVaccineDetail] = useState([]);

  useEffect(() => {
    const getVaccineDetail = async (id) => {
      const data = await getPatientVaccineDetailAPI(id);

      const vaccineDetailsMap = {};
      for (let i = 0; data !== null && i < data.length; i++) {
        const entry = data[i];
        vaccineDetailsMap[entry.id] = entry;
      }
      return vaccineDetailsMap;
    };

    const getVaccineIds = async (records) => {
      const newdata = records.reduce(function (filtered, option) {
        if (option.vaccine_id) {
          return filtered.concat([option.vaccine_id]);
        }
        return filtered;
      }, []);

      return newdata;
    };

    const getPatientRecords = async (id) => {
      const data = await getVaccineRecordAPI(id);
      return data;
    };

    const getPatientVaccineDetails = async (id) => {
      const patientRecords = await getPatientRecords(id);
      const patientVaccineIds = await getVaccineIds(patientRecords);
      const patientVaccineDetail = await getVaccineDetail(patientVaccineIds);
      await setVaccineRecord(patientRecords);
      await setVaccineDetail(patientVaccineDetail);
    };

    getPatientVaccineDetails(props.patientDetail.id);
  }, [props.patientDetail, vaccineRecord]);

  const getVaccinesArray = (records, vaccines) => {
    return records.map((record) => (
      <div className="card bg-light mb-3 container">
        <VaccinationLogEntry
          key={record.id}
          id={record.id}
          date_administered={record.date_administered}
          vaccine_id={record.vaccine_id}
          patient_id={record.patient_id}
          vaccine={vaccines[record.vaccine_id]}
          patientDetail={props.patientDetail}
          setVaccineRecord={setVaccineRecord}
        />
      </div>
    ));
  };

  return (
    <div>
      {getVaccinesArray(vaccineRecord, vaccineDetail)}
      <p></p>
    </div>
  );
};

export default PatientRecord;
