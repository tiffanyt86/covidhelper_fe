import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ReactDatePicker from "react-datepicker";
import VaccineDropDown from "./VaccineDropDown";

import { addNewRecordAPI, getAllVaccinesAPI } from "./APICalls";

import "react-datepicker/dist/react-datepicker.css";

const kDefaultFormState = {
  date_administered: "",
};

const convertDate = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const NewRecordForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [message, setMessage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [vaccineData, setVaccineData] = useState([]);

  const getAllVaccines = async () => {
    const data = await getAllVaccinesAPI();
    setVaccineData(data);
  };

  const getVaccineArray = (data) => {
    return data.map((vaccine) => (
      <option>
        <VaccineDropDown
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
        />
      </option>
    ));
  };

  const handleChange = (event) => {
    const newFormData = {
      date_administered: convertDate(startDate),
      patient_id: props.patient.id,
    };

    setFormData(newFormData);
    setMessage(null);
  };

  const handleAddRecord = async (event) => {
    event.preventDefault();
    props.setIsSubmit(true);

    const response = await addNewRecordAPI(formData);

    if (response.status === 201) {
      setMessage("New Vaccine Record Successfully Added!");
    } else {
      navigate("/404");
    }
    setFormData(kDefaultFormState);
  };

  useEffect(() => {
    getAllVaccines();
  }, []);

  return (
    <div className="col">
      <h3>Add New Vaccine Record</h3>
      <p></p>
      <form onChange={handleChange} onSubmit={handleAddRecord}>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label" for="inlineFormCustomSelect">
            Vaccine Name
          </label>
          <select class="col-sm-3" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            {getVaccineArray(vaccineData)}
          </select>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Vaccine Administered On
          </label>
          <div className="col-sm-3">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              // onChange={handleChange = (date)}
              placeholderText="DOB"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              isClearable
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRecordForm;

//   return (
//     <div className="col">
//       <h3>Add New Patient</h3>
//       <p></p>
//       <form onSubmit={handleAddPatient}>
//         <div className="form-group row">
//           <label className="col-sm-2 col-form-label">First Name</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control"
//               id="first_name"
//               name="first_name"
//               value={formData.first_name}
//               onChange={handleChange}
//             ></input>
//           </div>
//         </div>
//         <div className="form-group row">
//           <label className="col-sm-2 col-form-label">Last Name</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control"
//               id="last_name"
//               name="last_name"
//               value={formData.last_name}
//               onChange={handleChange}
//             ></input>
//           </div>
//         </div>
// <div className="form-group row">
//   <label className="col-sm-2 col-form-label">Date of Birth</label>
//   <div className="col-sm-3">
//     <ReactDatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       placeholderText="DOB"
//       showMonthDropdown
//       showYearDropdown
//       dropdownMode="select"
//       isClearable
//     />
//   </div>
// </div>
//         <div className="form-group row">
//           <label className="col-sm-2 col-form-label">Comorbidities</label>
//           <div className="col-sm-10">
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="comorbidities"
//                 id="comorbidities"
//                 value="True"
//                 checked={formData.comorbidities === "True"}
//                 onChange={handleChange}
//               ></input>
//               <label className="form-check-label">True</label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="comorbidities"
//                 id="comorbidities"
//                 value="False"
//                 checked={formData.comorbidities === "False"}
//                 onChange={handleChange}
//               ></input>
//               <label className="form-check-label">False</label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group row">
//           <label className="col-sm-2 col-form-label">Allergies</label>
//           <div className="col-sm-10">
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="allergies"
//                 id="allergies"
//                 value="True"
//                 checked={formData.allergies === "True"}
//                 onChange={handleChange}
//               ></input>
//               <label className="form-check-label">True</label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="allergies"
//                 id="allergies"
//                 value="False"
//                 checked={formData.allergies === "False"}
//                 onChange={handleChange}
//               ></input>
//               <label className="form-check-label">False</label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group row">
//           <div className="col-sm-10 theme-color">
//             <span>
//               <input
//                 type="submit"
//                 className="btn btn-primary"
//                 value="Add New Patient"
//               ></input>
//             </span>
//             {message && <span className="pl-3">{message}</span>}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
