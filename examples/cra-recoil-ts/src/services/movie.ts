import axios, { AxiosRequestConfig } from "axios";
import { MovieApiResponse } from "types";
import { Axios } from "./configuration";

export async function getMovies(request: AxiosRequestConfig) {
  try {
    const response = await Axios.request<MovieApiResponse>(request);
    return response.data.results || [];
  } catch (error: any) {
    throw new Error(`Error in 'axiosGetJsonData(${request.url})': ${error.message}`);
  }
}
