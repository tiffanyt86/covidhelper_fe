import React from "react";
import NationalVaccineForm from "../components/NationalVaccineForm";

const VaccinesMain = () => {
  return (
    <div className="container align-content-space-around">
      <div className="container">
        <h3>
          Nationally Available List of COVID-19 Vaccines "start container here"
        </h3>
        <div>Placeholder for list of vaccines</div>
      </div>
      <NationalVaccineForm />
    </div>
  );
};

export default VaccinesMain;
