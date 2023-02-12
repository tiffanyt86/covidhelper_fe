import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Patient = (props) => {
  return (
    <div>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => props.displayVaccineDetail(props.id)}
      >
        {props.last_name}, {props.first_name}
      </button>
    </div>
  );
};

export default Patient;
