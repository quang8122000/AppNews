import axios from 'axios';
import store from '../redux/store';
import {Service} from 'axios-middleware';

const api = axios.create({
  baseURL: 'https://api.nytimes.com',
});

export const createService = () => {
  const apiService = new Service($axios.api);
  apiService.register({
    onRequest(config: any) {
      const {devices}: any = store.getState();
      if (devices?.token) {
        config.headers.Authorization = `Bearer ${devices?.token}`;
      }
      console.log('config', config);
      return config;
    },

    onSync(promise: any) {
      return promise;
    },

    onResponse(response: any) {
      console.log('response', response);
      return response;
    },
  });
};
export const $axios = {api};
