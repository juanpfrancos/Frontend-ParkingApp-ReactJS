import jwt_decode from "jwt-decode";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
}


const signup = async (data) => {
  const response = await axios.post(API_URL + "usuarios/signup", data, config);
  if (response.data.access_token) {
    sessionStorage.setItem("token", response.data.access_token);
  }
};
    

const login = async (data) => {
  const response = await axios.post(API_URL + "usuarios/login", data, config);
  if (response.data.access_token) {
    sessionStorage.setItem("token", response.data.access_token);
  }
};


const logout = () => {
  sessionStorage.clear();
  window.location="/login"
}


const getCurrentUser =  () => {
  const token = sessionStorage.getItem('token');
  if(token !== null){
    return jwt_decode(token)
  }
  else{
    return token
  }
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
  API_URL
};



  


export default AuthService;