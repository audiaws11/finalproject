import axios from "axios";

const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c'; // Consider moving sensitive data like API keys to environment variables
const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1';

export const getBanners = () => {
  return axios.get(`${BASE_URL}/banners`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const getCategories = () => {
  return axios.get(`${BASE_URL}/categories`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const getPromos = () => {
  return axios.get(`${BASE_URL}/promos`, {
    headers: { 'apiKey': API_KEY }
  });
}
