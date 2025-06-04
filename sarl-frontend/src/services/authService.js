import axios from 'axios'
const API_URL = 'http://localhost:8080/api/auth';

// Configuration d'axios pour inclure le token dans les requêtes
axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer le refresh token
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.refreshToken) {
          const response = await axios.post(`${API_URL}/refreshtoken`, {
            refreshToken: user.refreshToken
          });
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('user', JSON.stringify({
            ...user,
            accessToken,
            refreshToken
          }));
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // Si le refresh token échoue, déconnecter l'utilisateur
        logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

/* 
export const registerUser = (signUpRequest) => axios.post(API_URL + '/signup', signUpRequest)

export const loginUser = (loginRequest) => axios.post(API_URL + '/signin', loginRequest) */

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, loginData);
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify({
        ...response.data,
        username: loginData.username
      }));
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, registerData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logout = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.accessToken) {
      throw new Error('No token found');
    }

    await axios.post(`${API_URL}/logout`);
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Logout error:', error);
    // Même en cas d'erreur, on nettoie le localStorage
    localStorage.removeItem('user');
    throw error.response ? error.response.data : error.message;
  }
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  const user = getCurrentUser();
  return !!user && !!user.accessToken;
};
