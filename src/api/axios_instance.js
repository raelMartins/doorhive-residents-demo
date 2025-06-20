import { BaseURL_TWO } from '@/constants/domain';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create({
  baseURL: BaseURL_TWO,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30 * 60 * 1000
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getCookie('token');

    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   response => Promise.resolve(response),
//   async error => {
//     if (!error?.response) return Promise.reject(error);
//     const user = await getSession('loggedIn');

//     if (user && error?.response?.status === 401) {
//       // toast({ title: "Access denied", status: "You are not authorized to view this page" });
//       // localStorage.clear();
//       // Router.push('/');
//       location.assign('/');
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default axiosInstance;
