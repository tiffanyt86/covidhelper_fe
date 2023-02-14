import axios from "axios";
import { getItemFromLocalStorage } from "../hooks/useAuth";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const loginAPI = async ({ username, password }) => {
  const request_body = JSON.stringify({
    username,
    password,
  });
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${kBaseUrl}/login/`,
      request_body,
      config
    );

    if (response.status === 200) {
      console.log(response);
      return response.data;
    }
  } catch (err) {
    console.log(err.response.status);
    return err.response.status;
  }
};

export const registerAPI = async ({
  username,
  password,
  email,
  first_name,
  last_name,
}) => {
  const request_body = JSON.stringify({
    username,
    password,
    email,
    first_name,
    last_name,
  });
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${kBaseUrl}/register/`,
      request_body,
      config
    );

    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(`Registration error: ${err}`);
  }
};

export const addNationalVaccine = async ({
  name,
  age,
  cap_color,
  border_color,
  dose,
  doses_per_vial,
  dilution,
  storage,
  thaw,
  bud,
  ndc,
  link,
}) => {
  const request_body = JSON.stringify({
    name,
    age,
    cap_color,
    border_color,
    dose,
    doses_per_vial,
    dilution,
    storage,
    thaw,
    bud,
    ndc,
    link,
  });
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${kBaseUrl}/vaccines/`,
      request_body,
      config
    );
    console.log(response);

    if (response.status === 201) {
      return response;
    }
  } catch (err) {
    console.log(`Error adding new vaccine: ${err}`);
  }
};

export const getAllVaccinesAPI = async () => {
  try {
    const response = await axios.get(`${kBaseUrl}/vaccines/`);

    if (response.status === 200) {
      console.log("got all vaccines");
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting all vaccines: ${err}`);
  }
};

export const getVaccineDetailAPI = async (id) => {
  try {
    const response = await axios.get(`${kBaseUrl}/vaccines/${id}`);

    if (response.status === 200) {
      console.log("got ONE vaccine");
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting ONE vaccine: ${err}`);
  }
};

export const getAllPatientsAPI = async () => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };
  try {
    const response = await axios.get(`${kBaseUrl}/my_patients/`, config);

    if (response.status === 200) {
      console.log("got all vaccines");
      console.log(user.token);
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting all patients: ${err}`);
  }
};

export const getPatientDetailAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };
  try {
    const response = await axios.get(`${kBaseUrl}/patients/${id}`, config);

    if (response.status === 200) {
      console.log("got ONE patient");
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting ONE patient: ${err}`);
  }
};

export const addNewPatientAPI = async ({
  first_name,
  last_name,
  dob,
  comorbidities,
  allergies,
  provider,
}) => {
  const request_body = JSON.stringify({
    first_name,
    last_name,
    dob,
    comorbidities,
    allergies,
    provider,
  });
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };

  try {
    const response = await axios.post(
      `${kBaseUrl}/my_patients/`,
      request_body,
      config
    );
    console.log(response);

    if (response.status === 201) {
      return response;
    }
  } catch (err) {
    console.log(`Error adding new patient: ${err}`);
  }
};

export const getVaccineRecordAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };
  try {
    const response = await axios.get(`${kBaseUrl}/records?ids=${id}`, config);

    if (response.status === 200) {
      console.log("got all records");
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting all patients: ${err}`);
  }
};

export const getPatientVaccineDetailAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };
  // this is where the code is breaking when clicking on "Singh, Mom" that has no vaccines administered, passes in []
  try {
    const response = await axios.get(`${kBaseUrl}/vaccines?ids=${id}`, config);

    if (response.status === 200) {
      console.log("got ONE vaccine INFO");
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting ONE vaccine INFO: ${err}`);
    return []; // added this to prevent error in the call
  }
};

export const addNewRecordAPI = async ({
  date_administered,
  patient_id,
  vaccine_id,
}) => {
  const request_body = JSON.stringify({
    date_administered,
    patient_id,
    vaccine_id,
  });
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };

  try {
    const response = await axios.post(
      `${kBaseUrl}/records/`,
      request_body,
      config
    );
    if (response.status === 201) {
      return response;
    }
  } catch (err) {
    console.log(`Error adding new vaccine record: ${err}`);
  }
};

export const deleteVaccineAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };

  try {
    const response = await axios.delete(`${kBaseUrl}/vaccines/${id}/`, config);

    if (response.status === 204) {
      console.log("Vaccine has been deleted");
    }
  } catch (err) {
    console.log(`Failed to delete vaccine: ${err}`);
  }
};

export const deletePatientAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };

  try {
    const response = await axios.delete(`${kBaseUrl}/patients/${id}/`, config);

    if (response.status === 204) {
      console.log("Patient has been deleted");
    }
  } catch (err) {
    console.log(`Failed to delete patient: ${err}`);
  }
};

export const deleteRecordAPI = async (id) => {
  const user = getItemFromLocalStorage("user");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
  };

  try {
    const response = await axios.delete(`${kBaseUrl}/records/${id}/`, config);

    if (response.status === 204) {
      console.log("Record has been deleted");
    }
  } catch (err) {
    console.log(`Failed to delete record: ${err}`);
  }
};
