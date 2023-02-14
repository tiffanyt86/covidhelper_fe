import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";
import Thing from "./Thing";

const PatientRecord = (props) => {
  const [vaccineRecord, setVaccineRecord] = useState([]);
  const [vaccineDetail, setVaccineDetail] = useState([]);

  // DO NOT DELETE!
  // const getPatientRecords = async (id) => {
  //   const data = await getVaccineRecordAPI(props.patientDetail.id);
  //   setVaccineRecord(data);

  //   const newdata = data.reduce(function (filtered, option) {
  //     if (option.vaccine_id) {
  //       return filtered.concat([option.vaccine_id]);
  //     }
  //     return filtered;
  //   }, []);

  //   await getVaccineDetail(newdata);
  // };

  // const getVaccineDetail = async (id) => {
  //   // return await getPatientVaccineDetailAPI(id);

  //   const data = await getPatientVaccineDetailAPI(id); // DO NOT DELETE

  //   const vaccineDetailsMap = {};
  //   for (let i = 0; i < data.length; i++) {
  //     const entry = data[i];
  //     vaccineDetailsMap[entry.id] = entry;
  //   }
  //   await setVaccineDetail(vaccineDetailsMap);
  // };

  // const vaccineDetailsMap = (data) => {
  //   for (let i = 0; i < data.length; i++) {
  //     const entry = data[i]}
  //   return vaccineDetailsMap[entry.id] = entry;
  // }

  // };
  //   for (let i = 0; i < data.length; i++) {
  //     const entry = data[i];
  //     vaccineDetailsMap[entry.id] = entry;
  //   }
  //   await setVaccineDetail(vaccineDetailsMap);
  //   console.log(vaccineDetail);
  // };

  useEffect(() => {
    const getVaccineDetail = async (id) => {
      // return await getPatientVaccineDetailAPI(id);

      const data = await getPatientVaccineDetailAPI(id); // DO NOT DELETE

      const vaccineDetailsMap = {};
      for (let i = 0; i < data.length; i++) {
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
  }, [props.patientDetail]);

  // console.log("printing vaccine records");
  // console.log(vaccineRecord);
  // console.log("end vaccine records");

  // loop over the the vaccineRecord
  // for each entry we use the vaccine_id to look up into the vaccineDetail
  // now we have complete information about the administered date and the vaccine itself

  const getVaccinesArray = (records, vaccines) => {
    return records.map((record) => (
      <Thing
        key={record.id}
        id={record.id}
        date_administered={record.date_administered}
        vaccine_id={record.vaccine_id}
        patient_id={record.patient_id}
        vaccine={vaccines[record.vaccine_id]}
      />
    ));
  };

  return (
    <div>
      <h3>Patient Vaccination Record</h3>
      {getVaccinesArray(vaccineRecord, vaccineDetail)}
      <p></p>
    </div>
  );
};

export default PatientRecord;
