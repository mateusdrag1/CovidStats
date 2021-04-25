import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://covid19.mathdro.id/api/',
});
