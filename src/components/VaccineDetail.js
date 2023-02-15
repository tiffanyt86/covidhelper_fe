import React from "react";

import "./vaccineDetail.css";

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

const VaccineDetail = (props) => {
  return (
    <div>
      <h4 className="row pt-2 theme-color">{props.vaccineDetail.name}</h4>
      <small>
        <table className="table table-bordered table-sm">
          <tbody>
            <tr>
              <th scope="row">Age Group</th>
              <td>{props.vaccineDetail.age}</td>
            </tr>
            <tr>
              <th scope="row">Cap Color</th>
              <td>{props.vaccineDetail.cap_color}</td>
            </tr>
            <tr>
              <th scope="row">Border Color</th>
              <td>{props.vaccineDetail.border_color}</td>
            </tr>
            <tr>
              <th scope="row">Dose</th>
              <td>{props.vaccineDetail.dose}</td>
            </tr>
            <tr>
              <th scope="row">Doses Per Vial</th>
              <td>{props.vaccineDetail.doses_per_vial}</td>
            </tr>
            <tr>
              <th scope="row">Dilution</th>
              <td>{boolToWord(props.vaccineDetail.dilution)}</td>
            </tr>
            <tr>
              <th scope="row">Storage</th>
              <td>{props.vaccineDetail.storage}</td>
            </tr>
            <tr>
              <th scope="row">Thaw</th>
              <td>{props.vaccineDetail.thaw}</td>
            </tr>
            <tr>
              <th scope="row">Beyond Use Date</th>
              <td>{props.vaccineDetail.bud}</td>
            </tr>
            <tr>
              <th scope="row">NDC</th>
              <td>{props.vaccineDetail.ndc}</td>
            </tr>
            <tr>
              <th scope="row">FDA Link</th>
              <td>{props.vaccineDetail["link"]}</td>
            </tr>
          </tbody>
        </table>
      </small>
    </div>
  );
};

export default VaccineDetail;
