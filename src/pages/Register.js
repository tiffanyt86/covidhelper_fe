import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavGuest from "../components/NavGuest";
import { registerAPI } from "../components/APICalls";

const kDefaultFormState = {
  username: "",
  password: "",
  email: "",
  first_name: "",
  last_name: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await registerAPI(formData);

    if (response.status === 200) {
      navigate("/login");
    } else {
      navigate("/404");
    }
    setFormData(kDefaultFormState);
  };

  return (
    <div>
      <NavGuest />
      <div className="container align-content-space-around">
        <h1>New User Registration</h1>
        <p></p>
        <form onSubmit={handleChange}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
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
            <div className="col-sm-10">
              <span>
                <input
                  type="button"
                  className="btn btn-primary"
                  value="Register"
                  onClick={handleRegister}
                ></input>
                <text className="pl-4">Already registered? Login </text>
                <NavLink to="/login">here.</NavLink>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
