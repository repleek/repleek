import axios from "axios";

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const Axios = axios.create({
  baseURL: REACT_APP_API_URL,
  params: { api_key: REACT_APP_API_KEY },
});
