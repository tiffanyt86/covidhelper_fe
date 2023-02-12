import React from "react";
import Vaccine from "../components/Vaccine";

const VaccineList = (props) => {
  const getVaccinesArray = (data) => {
    return data.map((vaccine) => (
      <Vaccine
        key={vaccine.id}
        id={vaccine.id}
        name={vaccine.name}
        age={vaccine.age}
        cap_color={vaccine.cap_color}
        dose={vaccine.dose}
        dilution={vaccine.dilution}
        storage={vaccine.storage}
        thaw={vaccine.thaw}
        bud={vaccine.bud}
        ndc={vaccine.ndc}
        link={vaccine.link}
        getVaccineData={props.getVaccineData}
        displayVaccineDetail={props.displayVaccineDetail}
      />
    ));
  };

  return (
    <div className="list-group">{getVaccinesArray(props.vaccineData)}</div>
  );
};

export default VaccineList;
