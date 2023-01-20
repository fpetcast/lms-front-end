import { postRequest } from "../config";

const register = (username, email, password) => {
    return postRequest("register", {
      username,
      email,
      password,
    });
  };
  
const login = (email, password) => {
    return postRequest("login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
};
  
const logout = () => {
    localStorage.removeItem("user");
};

const fakeLogin = (email, password) =>  {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'admin' && password === 'admin') {
          res({
            user : {
              username: 'pet',
              email : 'admin@admin.com',
              role: 'admin'
            },
            token: 'fdjfsdhfsjdhdfjdshdjsdjsfh',
          })
        } else {
          rej(false)
        }
      }, 1000)
    })  
}
  
export default {
    fakeLogin,
    register,
    login,
    logout,
  };