/* eslint-disable no-unused-vars */
import axios from "axios";
import { accessNested } from "accessnested";
import qs from "querystring";

const getEnv = accessNested(process.env);

const API_URL = getEnv("VUE_APP_API_URL");
const API_KEY = getEnv("VUE_APP_API_KEY");

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function setAccesToken(token) {
  localStorage.setItem("accessToken", token);
}

axios.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const request = error.config;
    const {
      response: { status }
    } = error;
    if (status === 401 && request.url === `${API_URL}/auth`) {
      return Promise.reject(error);
    }
    if (status === 401 && !request._retry) {
      request._retry = true;
      return axios
        .post(`${API_URL}/auth`, { apiKey: API_KEY })
        .then(({ status, data }) => {
          if (status === 200) {
            const { token } = data;
            setAccesToken(token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            return axios(request);
          }
        });
    }
    return Promise.reject(error);
  }
);

export async function getResource(resource, searchObj) {
  const { data } = await axios.get(
    `${API_URL}/${resource}?${qs.stringify(searchObj)}`
  );
  return data;
}
