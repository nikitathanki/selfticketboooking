import axios from "axios";

const ApiService = axios.create({
  baseURL: "http://localhost:3000", // backend port
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiService;
