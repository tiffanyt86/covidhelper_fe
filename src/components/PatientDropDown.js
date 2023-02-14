import React from "react";

const PatientDropDown = (props) => {
  return (
    <option value={props.id}>
      {props.last_name}, {props.first_name}
    </option>
  );
};

export default PatientDropDown;
