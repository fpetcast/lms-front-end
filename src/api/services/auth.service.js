import { postRequest } from "../config";
import axios from "axios";

const register = (name, surname, email, password) => {
    return postRequest("register", {
      name,
      surname,
      email,
      password,
    }).then((response)=> {
      return response.data;
    }).catch((error) => {
      console.log(error)
    })
  };
  
const login = (email, password) => {
    return postRequest("login", {
        email,
        password,
      })
      .then((response) => {
        return response.data;
      }).catch((error) => {
        console.log(error)
      })
};

const fetchSomething = () => {
  return axios.get("https://dummyjson.com/products/")
    .then((response) => {
      console.log('DUMMY RESPONSE',response)
      return response.data;
    });
};
  
const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};

const fakeLogin = (email, password) =>  {
    return new Promise((res) => {
      setTimeout(() => {
        if (email === 'admin' && password === 'admin') {
          res({
            status: true,
            data : {
              user : {
                username: 'pet',
                email : 'admin@admin.com',
                role: 'admin'
              },
              token: 'fdjfsdhfsjdhdfjdshdjsdjsfh',
            }
          })
        }else {
          res({
            status: false,
            error: 'Invalid Credentials'
          })
        }
      }, 1300)
    })  
}
  
export default {
    fakeLogin,
    register,
    login,
    logout,
    fetchSomething
};