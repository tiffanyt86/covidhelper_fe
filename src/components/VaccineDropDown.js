import React from "react";

const VaccineDropDown = (props) => {
  return <option value={props.id}>{props.name}</option>;
};

export default VaccineDropDown;
