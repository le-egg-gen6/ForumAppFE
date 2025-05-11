import axios from "axios";

const apiService = axios.create({
  baseURL: String(import.meta.env.VITE_BACKEND_API_URL) || "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor
apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Response interceptor
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        //toast.error("You are not authorized to access this resource.");
      } else if (status === 500) {
        //toast.error("Internal server error.");
      }
    } else if (error.request) {
      //toast.error("Network error.");
    } else {
      //toast.error("Something went wrong.");
    }
  }
);

export default apiService;
