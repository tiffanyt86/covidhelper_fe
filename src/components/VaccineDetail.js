import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const VaccineDetail = (props) => {
  // const getVaccineDetailJSX = () =>
  //   return props.vaccineDetail.map(vaccine);

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
