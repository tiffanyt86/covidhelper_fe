import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Vaccine = (props) => {
  return (
    <div>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => props.displayVaccineDetail(props.id)}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Vaccine;
