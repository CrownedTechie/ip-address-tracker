import axios from "axios";

const url = 'https://geo.ipify.org/api/v2';
export const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
    baseURL: url,
    timeout: 10000, //waits for a response, after 10 secs it aborts the request
    headers: {
      'Content-Type': 'application/json',
    },
});