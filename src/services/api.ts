import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const api = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'x-rapidapi-host': import.meta.env.VITE_APP_X_RAPIDAPI_HOST,
    'x-rapidapi-key': import.meta.env.VITE_APP_X_RAPIDAPI_KEY
  }
});

export default api;