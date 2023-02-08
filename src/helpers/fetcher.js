import axios from 'axios';
import { API_URL } from "./constants.js";

const basicConfig = {
  baseURL: API_URL
}
export const fetcher = (path) => {
  return axios.get(path, {
    ...basicConfig,
  }).then((response) => {
    return response.data;
  });
}

export const _axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
    "Content-Type": "application/json"
  }
})