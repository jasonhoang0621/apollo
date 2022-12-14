import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/graphql",
  //content type for graphql
  headers: {
    "Content-Type": "application/json",
    "apollo-operation-name": "getStudents",
    "apollo-require-preflight": false,
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    return error?.response?.data;
  }
);

export { axiosClient };
