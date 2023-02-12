import React, { useState, useEffect } from "react";
import NationalVaccineForm from "../components/NewVaccineForm";
import { getAllVaccinesAPI, getVaccineDetailAPI } from "../components/APICalls";
import VaccineList from "../components/VaccineList";
import VaccineDetail from "../components/VaccineDetail";

const VaccinesMain = () => {
  const [vaccineData, setVaccineData] = useState([]);
  const [vaccineDetail, setVaccineDetail] = useState(null);

  const getAllVaccines = async () => {
    const data = await getAllVaccinesAPI();
    setVaccineData(data);
  };

  useEffect(() => {
    getAllVaccines();
  }, []);

  const displayVaccineDetail = async (id) => {
    const data = await getVaccineDetailAPI(id);
    setVaccineDetail(data);
  };

  return (
    <div className="container align-content-space-around">
      <div className="row">
        <div className="col">
          <h3>Available COVID-19 Vaccines</h3>
          <VaccineList
            vaccineData={vaccineData}
            displayVaccineDetail={displayVaccineDetail}
          />
        </div>
        <div className="col">
          {vaccineDetail && <VaccineDetail vaccineDetail={vaccineDetail} />}
        </div>
      </div>
      <NationalVaccineForm className="row" />
    </div>
  );
};

export default VaccinesMain;
