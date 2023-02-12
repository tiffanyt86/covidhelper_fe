import React from "react";

const Patient = (props) => {
  return (
    <div>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => props.displayPatientDetail(props.id)}
      >
        {props.last_name}, {props.first_name}
      </button>
    </div>
  );
};

export default Patient;
