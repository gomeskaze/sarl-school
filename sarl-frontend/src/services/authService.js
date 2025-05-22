import axios from 'axios'
const API_URL = 'http://localhost:8080/api/auth';

/* 
export const registerUser = (signUpRequest) => axios.post(API_URL + '/signup', signUpRequest)

export const loginUser = (loginRequest) => axios.post(API_URL + '/signin', loginRequest) */

export const login = async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}/signin`, loginData);
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

  export const logout = () => {
    localStorage.removeItem('user');
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
/*   
export const authService = {
    async login(username, password) {
        try {
            const response = await POST(`${API_URL}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem('user', JSON.stringify(data));
            }
            return data;
        } catch (error) {
            throw error;
        }
    },

    async register(username, email, role, password) {
        try {
            const response = await POST(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, role, password }),
            });
            
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            
            return await response.json();
        } catch (error) {
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('user');
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
};  
*/