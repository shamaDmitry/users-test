import axios from 'axios';
import {API_URL} from "./constants.js";

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