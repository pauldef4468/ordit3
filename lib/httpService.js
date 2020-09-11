import axios from "axios";
// import logger from "./logService";
//import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // TODO we want a logger like in Vidly here
    console.log("Non 400 error in Axios");
    //toast.error("An unexpected error occured");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  //axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
