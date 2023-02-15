import React, { useState, useEffect } from "react";
import NewVaccineForm from "../components/NewVaccineForm";
import { getAllVaccinesAPI, getVaccineDetailAPI } from "../components/APICalls";
import VaccineList from "../components/VaccineList";
import VaccineDetail from "../components/VaccineDetail";

const VaccinesMain = () => {
  const [vaccineData, setVaccineData] = useState([]);
  const [vaccineDetail, setVaccineDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getAllVaccines = async () => {
    const data = await getAllVaccinesAPI();
    setVaccineData(data);
  };

  const handleShowForm = (event) => {
    setShowForm(!showForm);
    event.prevent.default();
  };

  useEffect(() => {
    getAllVaccines();
  }, []);

  const displayVaccineDetail = async (id) => {
    const data = await getVaccineDetailAPI(id);
    setVaccineDetail(data);
  };

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div
          type="button"
          className="badge text-primary"
          onClick={handleShowForm}
        >
          * Add New Vaccine
        </div>

        <div className="col-3">
          <h3>COVID-19 Vaccines</h3>
          <VaccineList
            vaccineData={vaccineData}
            displayVaccineDetail={displayVaccineDetail}
            getAllVaccines={getAllVaccines}
          />
        </div>
        <div className="col align-self-flex-start px-0 no-gutters">
          {vaccineDetail && <VaccineDetail vaccineDetail={vaccineDetail} />}
        </div>
      </div>
      {showForm && (
        <NewVaccineForm className="row" getAllVaccines={getAllVaccines} />
      )}
    </div>
  );
};

export default VaccinesMain;
