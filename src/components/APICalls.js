import axios from "axios";

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
      return response;
    }
  } catch (err) {
    console.log(`Failed to login: ${err}`);
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
