import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { addNewPatientAPI } from "./APICalls";
import { getItemFromLocalStorage } from "../hooks/useAuth";

import "./newVaccineForm.css";
import "react-datepicker/dist/react-datepicker.css";

const kDefaultFormState = {
  first_name: "",
  last_name: "",
  comorbidities: "",
  allergies: "",
  dob: "",
  provider: "",
};

const convertDate = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const user = getItemFromLocalStorage("user");

const NewPatientForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [message, setMessage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = {
      ...formData,
      [fieldName]: fieldValue,
      dob: convertDate(startDate),
      provider: user.id,
    };

    setFormData(newFormData);
    setMessage(null);
  };

  const handleAddPatient = async (event) => {
    event.preventDefault();
    props.setIsSubmit(true);

    const response = await addNewPatientAPI(formData);

    if (response.status === 201) {
      setMessage("New Patient Successfully Added!");
    } else {
      navigate("/404");
    }
    setFormData(kDefaultFormState);
  };

  return (
    <div className="col">
      <h3>Add New Patient</h3>
      <p></p>
      <form onSubmit={handleAddPatient}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Date of Birth</label>
          <div className="col-sm-3">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="DOB"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              isClearable
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Comorbidities</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="comorbidities"
                id="comorbidities"
                value="True"
                checked={formData.comorbidities === "True"}
                onChange={handleChange}
              ></input>
              <label className="form-check-label">True</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="comorbidities"
                id="comorbidities"
                value="False"
                checked={formData.comorbidities === "False"}
                onChange={handleChange}
              ></input>
              <label className="form-check-label">False</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Allergies</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="allergies"
                id="allergies"
                value="True"
                checked={formData.allergies === "True"}
                onChange={handleChange}
              ></input>
              <label className="form-check-label">True</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="allergies"
                id="allergies"
                value="False"
                checked={formData.allergies === "False"}
                onChange={handleChange}
              ></input>
              <label className="form-check-label">False</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 theme-color">
            <span>
              <input
                type="submit"
                className="btn btn-primary"
                value="Add New Patient"
              ></input>
            </span>
            {message && <span className="pl-3">{message}</span>}
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewPatientForm;
