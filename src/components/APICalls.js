import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const convertTaskApi = (task) => {
  const { id, is_complete: isComplete, title, description } = task;
  return { id, isComplete, title, description };
};

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
    console.log(`Registration error: ${err}`);
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
      // console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.log(`failed getting ONE vaccine: ${err}`);
  }
};
