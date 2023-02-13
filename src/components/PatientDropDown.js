import React from "react";

const PatientDropDown = (props) => {
  return (
    <option value={props.id}>
      {props.last_name}, {props.first_name}
    </option>
    // <>
    //   [value: '{props.id}'', label: '{props.first_name}']
    // </>
  );
};

export default PatientDropDown;
