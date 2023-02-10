import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAPI } from "../components/APICalls";
import { useAuth, setItemInLocalStorage } from "../hooks/useAuth";
import { mockUser } from "./data";

const kDefaultFormState = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(kDefaultFormState);

  const { login } = useAuth();

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginAPI(formData);

    if (response.data["error"] === "Error logging in...") {
      navigate("/404"); // not navigating here
    } else {
      login({
        username: formData.username,
        password: formData.password,
        token: response.data,
      });
    }

    // if (response.status === 200) {
    //   login({
    //     username: formData.username,
    //     password: formData.password,
    //     token: response.data,
    //   });
    //   console.log(response.data["error"]);
    // }

    setFormData(kDefaultFormState);
    navigate("/home");
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
        </div>
      </form>
    </div>
  );
};

export default Login;
