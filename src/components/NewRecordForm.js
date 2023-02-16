import React, { useState, useEffect } from "react";

import ReactDatePicker from "react-datepicker";
import VaccineDropDown from "./VaccineDropDown";
import PatientDropDown from "./PatientDropDown";
import {
  addNewRecordAPI,
  getAllPatientsAPI,
  getAllVaccinesAPI,
} from "./APICalls";

import "react-datepicker/dist/react-datepicker.css";

const kDefaultFormState = {
  date_administered: "",
  patient_id: "",
  vaccine_id: "",
};

const convertDate = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const NewRecordForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [message, setMessage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [vaccineData, setVaccineData] = useState([]);
  const [patientData, setPatientData] = useState([]);

  const getAllVaccines = async () => {
    const data = await getAllVaccinesAPI();
    setVaccineData(data);
  };

  const getAllPatients = async () => {
    const data = await getAllPatientsAPI();
    setPatientData(data);
  };

  const getVaccineArray = (data) => {
    return data.map((vaccine) => (
      <VaccineDropDown
        key={vaccine.id}
        id={vaccine.id}
        name={vaccine.name}
        age={vaccine.age}
        cap_color={vaccine.cap_color}
        dose={vaccine.dose}
        dilution={vaccine.dilution}
        storage={vaccine.storage}
        thaw={vaccine.thaw}
        bud={vaccine.bud}
        ndc={vaccine.ndc}
        link={vaccine.link}
      />
    ));
  };

  const getPatientsArray = (data) => {
    return data.map((patient) => (
      <PatientDropDown
        key={patient.id}
        id={patient.id}
        first_name={patient.first_name}
        last_name={patient.last_name}
        dob={patient.dob}
        comorbidities={patient.comorbidities}
        allergies={patient.allergies}
        formData={formData}
      />
    ));
  };

  const handlePatientChange = (event) => {
    const newFormData = {
      ...formData,
      patient_id: event.target.value,
      date_administered: convertDate(startDate),
    };
    setFormData(newFormData);
    setMessage(null);
    console.log(newFormData);
  };

  const handleVaccineChange = (event) => {
    const newFormData = {
      ...formData,
      vaccine_id: event.target.value,
      date_administered: convertDate(startDate),
    };
    setFormData(newFormData);
    setMessage(null);
    console.log(newFormData);
  };

  const handleAddRecord = async (event) => {
    event.preventDefault();
    const response = await addNewRecordAPI(formData);
    setStartDate(new Date());

    if (response.status === 201) {
      setMessage("Added new vaccine record!");
    } else {
      setMessage("Error adding vaccine record");
    }
  };

  useEffect(() => {
    getAllVaccines();
    getAllPatients();
  }, []);

  return (
    <div className="col">
      <h4 className="pt-2">Add New Vaccine Record</h4>
      <p></p>
      <form className="form-control-sm" onSubmit={handleAddRecord}>
        <div className="form-group row">
          <label
            className="col-sm-5 col-form-label"
            for="inlineFormCustomSelect"
          >
            Vaccine Name
          </label>
          <select
            value={vaccineData.vaccine_id}
            class="col-sm-4"
            name="vaccine_id"
            id="vaccine_id"
            onChange={handleVaccineChange}
          >
            <option>Select Vaccine...</option>
            {getVaccineArray(vaccineData)}
          </select>
        </div>
        <div className="form-group row">
          <label class="col-sm-5 col-form-label" for="inlineFormCustomSelect">
            Patient Name
          </label>
          <select
            class="col-sm-4"
            name="patient_id"
            id="patient_id"
            onChange={handlePatientChange}
          >
            <option>Select Patient...</option>
            {getPatientsArray(patientData)}
          </select>
        </div>
        <div className="form-group row">
          <label className="col-sm-5 col-form-label">
            Vaccine Administered On
          </label>
          <div className="col-sm-4">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Date"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              isClearable
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 theme-color">
            <span>
              <input
                type="submit"
                className="btn btn-primary"
                value="Add New Vaccine Record"
              ></input>
            </span>
            {message && <span className="pl-3">{message}</span>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRecordForm;
