import axios from "axios";
import { UserApiData } from "../../types/user";
import { getUserApiUrl } from "./configuration";

export async function getUsers() {
  const userApiUrl = getUserApiUrl();
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get<UserApiData>(userApiUrl);
    return response.data || [];
  } catch (error: any) {
    throw new Error(
      `Error in 'axiosGetJsonData(${userApiUrl})': ${error.message}`
    );
  }
}
