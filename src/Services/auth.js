import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
}

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const signup = (data) => {
return axios.post(API_URL + "usuarios/signup", data, config)
.then((response) => {
    if(response.data.access_token){
        sessionStorage.setItem("token",response.data.access_token)
    }
});
};
    

const login = (data) => {
return axios.post(API_URL + "usuarios/login", data, config)
.then((response) => {
    if(response.data.access_token){
        sessionStorage.setItem("token",response.data.access_token)
    }
});
};



const logout = () => {
  sessionStorage.clear();
  window.location="/login"
}


const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem('key'));
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
};



  


export default AuthService;