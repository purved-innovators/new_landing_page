import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL 

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000, 
});

export {AxiosInstance}