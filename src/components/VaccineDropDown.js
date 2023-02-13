import React from "react";

const VaccineDropDown = (props) => {
  return (
    <div>
      <option value={props.id}>{props.name}</option>
    </div>
  );
};

export default VaccineDropDown;
