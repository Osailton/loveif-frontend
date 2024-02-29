import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchPrivateData = async (call, token) => {
  try {
    const header = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const url = `${API_URL}` + call;
    const response = await axios.get(url, {
      headers: header,
    });
    //   .then((response) => {
    //     return response;
    //   });
    return response.data;
  } catch (error) {
    throw error;
  }
};
