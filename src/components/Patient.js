import React, { useState, useEffect } from "react";
import { deletePatientAPI } from "./APICalls";
import PatientDetail from "./PatientDetail";

const rndInt = () => Math.floor(Math.random() * 4);

const oddOrEven = (x) => {
  return x & 1 ? "Pfizer" : "Moderna";
};

const statuses = {
  secondary: "Status: Undetermined",
  success: "Status: Good",
  warning: "Status: Due Soon",
  danger: "Status: Overdue",
};

const status_selector = ["secondary", "success", "warning", "danger"];

const Patient = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [status, setStatus] = useState([]);
  const [displayBadge, setDisplayBadge] = useState(false);

  useEffect(() => {
    props.getAllPatients();
    determine_status();
  }, []);

  const get_status = () => {
    const index = rndInt();
    const my_key = status_selector[index];
    const my_value = statuses[my_key];
    return [my_key, my_value];
  };

  const determine_status = async () => {
    const pt_status = await get_status();
    await setStatus(pt_status);
  };

  const handleBadge = () => {
    setDisplayBadge(!displayBadge);
  };

  const handleClicked = () => {
    props.displayPatientDetail(props.id);
    setIsClicked(!isClicked);
  };

  const handleDeletePatient = () => {
    deletePatientAPI(props.id);
    props.getAllPatients();
  };

  console.log(oddOrEven(props.id));
  return (
    <div className="container justify-content-center">
      <div className="row no-gutters align-items-center">
        <div className="col">
          <button
            type="button"
            className="list-group-item list-group-item-secondary list-group-item-action mr-1 py-2"
            onClick={handleClicked}
          >
            {props.last_name}, {props.first_name}
            {displayBadge && (
              <span className={`badge badge-pill badge-${status[0]} mx-3`}>
                {status[1]}
              </span>
            )}
            {status[0] !== "success" ||
              displayBadge ===
                false(
                  <span className="badge badge-light mx-3">
                    {oddOrEven(props.id)}
                  </span>
                )}
          </button>
        </div>
        <div className="col small">
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleDeletePatient}
          >
            X
          </button>
        </div>
      </div>
      <div>
        {isClicked && (
          <PatientDetail
            patientDetail={props.patientDetail}
            displayPatientDetail={props.displayPatientDetail}
            handleBadge={handleBadge}
          />
        )}
      </div>
    </div>
  );
};

export default Patient;
