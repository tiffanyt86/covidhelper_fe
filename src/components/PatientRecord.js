import React, { useState, useEffect } from "react";
import { getVaccineRecordAPI, getPatientVaccineDetailAPI } from "./APICalls";
import Thing from "./Thing";

const PatientRecord = (props) => {
  const [vaccineRecord, setVaccineRecord] = useState([]);
  const [vaccineDetail, setVaccineDetail] = useState([]);

  // DO NOT DELETE!
  const getPatientRecords = async (id) => {
    const data = await getVaccineRecordAPI(props.patientDetail.id);
    setVaccineRecord(data);

    const newdata = data.reduce(function (filtered, option) {
      if (option.vaccine_id) {
        return filtered.concat([option.vaccine_id]);
      }
      return filtered;
    }, []);

    await getVaccineDetail(newdata);
  };

  const getVaccineDetail = async (id) => {
    // return await getPatientVaccineDetailAPI(id);

    const data = await getPatientVaccineDetailAPI(id); // DO NOT DELETE

    const vaccineDetailsMap = {};
    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      vaccineDetailsMap[entry.id] = entry;
    }
    await setVaccineDetail(vaccineDetailsMap);
    console.log(vaccineDetail);
  };

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
    getPatientRecords();
  }, [props.patientDetail]);

  // console.log("printing vaccine records");
  // console.log(vaccineRecord);
  // console.log("end vaccine records");

  // loop over the the vaccineRecord
  // for each entry we use the vaccine_id to look up into the vaccineDetail
  // now we have complete information about the administered date and the vaccine itself

  const getVaccinesArray = (data) => {
    return data.map((patient) => (
      <Thing
        key={patient.id}
        id={patient.id}
        date_administered={patient.date_administered}
        vaccine_id={patient.vaccine_id}
        patient_id={patient.patient_id}
        // vaccine={vaccines[patient.vaccine_id]}
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
