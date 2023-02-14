import React from "react";

const VaccinationLogEntry = (props) => {
  return (
    <div>
      <ul>Vaccine: {props.vaccine.name}</ul>
      <ul>Date Administered: {props.date_administered}</ul>
    </div>
  );
};

export default VaccinationLogEntry;
