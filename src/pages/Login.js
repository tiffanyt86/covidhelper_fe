import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAPI } from "../components/APICalls";
import { useAuth } from "../hooks/useAuth";

import "./login.css";

const kDefaultFormState = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(kDefaultFormState);
  const [message, setMessage] = useState(null);

  const { login } = useAuth();

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setMessage(null);
    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginAPI(formData);

    if (response === 400) {
      setMessage("Invalid credentials, try again");
    } else {
      login({
        username: formData.username,
        password: formData.password,
        token: response[0],
        id: response[1],
      });
      setFormData(kDefaultFormState);
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
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
          <div className="col-sm-10">
            <span>
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign in"
              ></input>
              <text className="pl-4">Not registered? Click here to </text>
              <NavLink to="/register">sign-up!</NavLink>
            </span>
          </div>
          <div className="col-sm-10 red">{message}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
