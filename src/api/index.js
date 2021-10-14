import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT_MS,
  headers: {},
  responseType: 'json',
});

//TODO: Add Inceptors for AtomLoader Component
axios.defaults.headers.common['Accept-Language'] =
  process.env.VUE_APP_DEFAULT_LOCALE;

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axios;
