import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";
import VaccinationLogEntry from "./VaccinationLogEntry";

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

    getPatientVaccineDetails(props.patientDetail.id); //nothing has been clicked yet so patientDetail is []
  }, [props.patientDetail]);

  const getVaccinesArray = (records, vaccines) => {
    return records.map((record) => (
      <div className="border w-50 h-25">
        <small>
          <VaccinationLogEntry
            key={record.id}
            id={record.id}
            date_administered={record.date_administered}
            vaccine_id={record.vaccine_id}
            patient_id={record.patient_id}
            vaccine={vaccines[record.vaccine_id]}
            displayPatientDetail={props.displayPatientDetail}
          />
        </small>
      </div>
    ));
  };

  return <div>{getVaccinesArray(vaccineRecord, vaccineDetail)}</div>;
};

export default PatientRecord;
