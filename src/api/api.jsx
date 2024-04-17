import axios from "axios";

const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c'; // Consider moving sensitive data like API keys to environment variables
const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1';
const BEARER = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k';
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

export const getActivities = () => {
  return axios.get(`${BASE_URL}/activities`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const login = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload, {
    headers: { 'apiKey': API_KEY }
  });
};

export const register = (payload) => {
  return axios.post(`${BASE_URL}/register`, payload, {
    headers: { 'apiKey': API_KEY }
  });
}

export const getActivityById = (id) => {
  return axios.get(`${BASE_URL}/activity/${id}`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const getOfferById = (id) => {
  return axios.get(`${BASE_URL}/promo/${id}`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const getCategoryById = (id) => {
  return axios.get(`${BASE_URL}/category/${id}`, {
    headers: { 'apiKey': API_KEY }
  });
}
export const getActivitiesByCategory = (id) => {
  return axios.get(`${BASE_URL}/activities-by-category/${id}`, {
    headers: { 'apiKey': API_KEY }
  });
}

export const postImage = (payload) => {
  return axios.post(`${BASE_URL}/upload-image`, payload, {
    headers: {
      "content-type": "multipart/form-data",
      "Authorization": BEARER,
      'apiKey': API_KEY,
    },
  });
}



export const getLogin = () => {
  return axios.get(`${BASE_URL}/user`, {
  
  });
}

export const getUser = async (token) => {
  
  const response = await axios.get(`${BASE_URL}/user`, { 
      headers: {
          'Authorization': `Bearer ${token}`,
          'apiKey': API_KEY, 
          'Content-Type': 'application/json'
      }
   });
  return response.data;
};

export const updateUserProfile = async (data, token) => {
 
  const response = await axios.post(`${BASE_URL}/update-profile`, data, { 
      headers: {
          'Authorization': `Bearer ${token}`,
          'apiKey': API_KEY, 
          'Content-Type': 'application/json'
      }
   });
  return response.data;
};

export const getLogout = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/logout`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'apiKey': API_KEY, 
              'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) {
          console.log('Logged out successfully');
          return true;
      } else {
          console.error('Failed to log out');
          return false;
      }
  } catch (error) {
      console.error('Logout error:', error);
      return false;
  }
}

export const getAllProfile = async () => {
  const response = await axios.get(`${BASE_URL}/all-user`, { 
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'apiKey': API_KEY, 
          'Content-Type': 'application/json'
      }
   });
  return response.data;
};