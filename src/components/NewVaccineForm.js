import React, { useState, useEffect } from "react";
import { addNationalVaccine } from "./APICalls";

import "./newVaccineForm.css";

const kDefaultFormState = {
  name: "",
  age: "",
  cap_color: "",
  border_color: "",
  dose: "",
  doses_per_vial: "",
  dilution: "",
  storage: "",
  thaw: "",
  bud: "",
  ndc: "",
  link: "",
};

const NewVaccineForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    props.getAllVaccines();
  }, [message]);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
    setMessage(null);
  };

  const handleAddVaccine = async (event) => {
    event.preventDefault();

    const response = await addNationalVaccine(formData);

    if (response.status === 201) {
      setMessage("Vaccine Added!");
    } else {
      setMessage("Error, try again");
    }
    setFormData(kDefaultFormState);
  };

  return (
    <div className="container w-50">
      <p></p>
      <h3 className="mt-5">Vaccine Input Form</h3>
      <p></p>
      <small>
        <form className="small" onSubmit={handleAddVaccine}>
          <div className="form-group row">
            <label className="col-form-label-sm">Vaccine Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label">Age Group</label>
            <div className="col-sm-10">
              <select
                className="form-control form-control-sm"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              >
                <option>Choose One</option>
                <option>6 mos to 4 years</option>
                <option>6 mos to 5 years</option>
                <option>age 5-11</option>
                <option>age 6-11</option>
                <option>12 and older</option>
                <option>18 and older</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label">Cap Color</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="cap_color"
                name="cap_color"
                value={formData.cap_color}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Border Color</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="border_color"
                name="border_color"
                value={formData.border_color}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Dose</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="dose"
                name="dose"
                value={formData.dose}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Doses Per Vial</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="doses_per_vial"
                name="doses_per_vial"
                value={formData.doses_per_vial}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Dilution Required</label>
            <div className="col-sm-5 ml-2 pt-1">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dilution"
                  id="dilution"
                  value="True"
                  checked={formData.dilution === "True"}
                  onChange={handleChange}
                ></input>
                <label className="form-check-label">True</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dilution"
                  id="dilution"
                  value="False"
                  checked={formData.dilution === "False"}
                  onChange={handleChange}
                ></input>
                <label className="form-check-label">False</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Storage</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="storage"
                name="storage"
                value={formData.storage}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Thawing Time</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="thaw"
                name="thaw"
                value={formData.thaw}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">Beyond Use Date</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="bud"
                name="bud"
                value={formData.bud}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">NDC</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="ndc"
                name="ndc"
                value={formData.ndc}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label-sm">FDA Info Link</label>
            <div className="col-sm-10">
              <input
                type="url"
                className="form-control form-control-sm"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 theme-color">
              <span>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add New Vaccine"
                ></input>
              </span>
              {message && <span className="pl-3">{message}</span>}
            </div>
          </div>
        </form>
      </small>
    </div>
  );
};

export default NewVaccineForm;
