import React from "react";

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
