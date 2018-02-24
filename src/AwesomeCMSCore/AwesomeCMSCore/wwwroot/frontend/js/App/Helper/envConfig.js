import axios from "axios";

let env = {};

if (isProdEnviroment()) {
  env = {
    baseUrl: "http://randomshit.com",
    tokenUrl: "http://randomshit.com/connect/token"
  };
} else {
  env = {
    tokenUrl: "http://localhost:5000/connect/token",
    loginUrl: "http://localhost:5000/Account/Login"
  };
  axios.defaults.baseURL = 'http://localhost:5000/';
}

export default env;

export function isProdEnviroment() {
  return process.env.NODE_ENV === "production";
}