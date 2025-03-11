import axios from "axios";

/**
 * Base URLs for the API calls.
 */
export const BASE_URLS = {
  default: "https://cdn-cms.igp.cloud/bto/static/files",
  generateInputs: "https://gist.githubusercontent.com",
};

/**
 * Axios instance for making API calls to the default base URL.
 */
export const API = axios.create({
  baseURL: BASE_URLS.default,
});

/**
 * Axios instance for making API calls to the generate inputs base URL.
 */
export const inputsApi = axios.create({
  baseURL: BASE_URLS.generateInputs,
});
