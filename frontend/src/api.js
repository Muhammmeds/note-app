import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}:3000`,
  timeout: 5000,
   headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
