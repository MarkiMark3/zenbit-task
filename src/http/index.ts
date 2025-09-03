import axios from "axios";

export function createClient() {
  return axios.create({
    baseURL: "https://zenbit-task-back-vnk4.onrender.com",
    withCredentials: true,
  });
}
