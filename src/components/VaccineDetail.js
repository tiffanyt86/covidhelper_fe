import React from "react";

const VaccineDetail = (props) => {
  return (
    <div>
      Vaccine Details:
      {Object.keys(props.vaccineDetail).map((key, index) => {
        return (
          <div key={index}>
            <div className="small">
              {key}: {props.vaccineDetail[key]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VaccineDetail;
