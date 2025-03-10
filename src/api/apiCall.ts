import { AxiosRequestConfig } from "axios";
import { API } from "./config.ts";

interface ApiCallParams<T = unknown> {
  method: "get" | "post" | "put" | "patch" | "delete";
  url: string;
  data?: T | null;
  config?: AxiosRequestConfig;
  onSuccess?: (response: T) => void;
  onError?: (error: unknown) => void;
}

/**
 * Generic function to make API calls using Axios.
 * This function handles different HTTP methods (GET, POST, PUT, PATCH, DELETE),
 * supports sending data in the request body, and automatically sets appropriate headers.
 * It also supports handling success and error responses via callbacks.
 *
 * @param {Object} params - The parameters required for the API request.
 * @param {'get' | 'post' | 'put' | 'patch' | 'delete'} params.method - The HTTP method to use (GET, POST, PUT, PATCH, DELETE).
 * @param {string} params.url - The endpoint URL for the API request.
 * @param {T} [params.data=null] - The data to send with the request, if applicable (for POST, PUT, PATCH).
 * @param {AxiosRequestConfig} [params.config={}] - Additional Axios configuration such as headers, timeout, etc.
 * @param {(response: T) => void} [params.onSuccess] - Callback function to execute if the API request is successful.
 * @param {(error: any) => void} [params.onError] - Callback function to execute if the API request fails.
 *
 * @returns {Promise<T>} - A promise that resolves with the response data from the API request.
 *                          The generic type T ensures that the function can return different types of responses depending on the API endpoint.
 *
 */

export const apiCall = async <T = unknown>({
  method,
  url,
  data = null,
  config = {},
  onSuccess,
  onError,
}: ApiCallParams<T>): Promise<T> => {
  try {
    const isFormData = data instanceof FormData;

    const response = await API({
      method,
      url,
      data,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        ...config?.headers,
      },
      ...config,
    });
    if (onSuccess) onSuccess(response.data);
    return response.data;
  } catch (error) {
    if (onError) onError(error);
    console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
    throw error;
  }
};
