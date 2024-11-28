import axios from "axios";

const baseURL = 'https://geo.ipify.org/api/v2';

export const axiosInstance = axios.create({
    baseURL,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
});