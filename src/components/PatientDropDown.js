import React from "react";

const PatientDropDown = (props) => {
  return (
    <div>
      <option value={props.id}>
        {props.last_name}, {props.first_name}
      </option>
    </div>
  );
};

export default PatientDropDown;
