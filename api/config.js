import axios from "axios";

const BASE_API = "http://localhost:3001/";

export const json_user = axios.create({
  baseURL: BASE_API,
  headers: { "Content-Type": "application/json" },
});
