import axios from 'axios';
import { STORAGE_KEY, Storage } from '../../storage/localstorage';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    let token =  Storage.getItem(STORAGE_KEY.token)
    config.headers["Authorization"] = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    if(response.data) return response.data;
    return response;
  }, function (error) {
    
    if(error.response.data) error.message = error.response.data.message
    
    return Promise.reject(error);
  });
