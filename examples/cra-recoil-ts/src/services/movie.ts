import { AxiosRequestConfig } from 'axios'
import { Movie, MovieApiResponse } from 'types'

import Axios from './configuration'

export async function getMovies(request: AxiosRequestConfig) {
  try {
    const response = await Axios.request<MovieApiResponse>(request)
    return response.data.results || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${request.url})': ${error.message}`
    )
  }
}
export async function getMovie(request: AxiosRequestConfig) {
  try {
    const response = await Axios.request<Movie>(request)
    return response.data
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${request.url})': ${error.message}`
    )
  }
}
