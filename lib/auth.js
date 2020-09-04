import Router from "next/router";
import Cookie from "js-cookie";
import http from "./httpService";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const ORDIT_URL = process.env.NEXT_PUBLIC_ORDIT_URL || "http://localhost:3000";

export async function login(email, password) {
  // Use our login api which will use strapi api
  // Our server also sets an "auth" cookie with the jwt
  return await http.post(`${ORDIT_URL}/api/login`, {
    identifier: email,
    password,
  });
}

export function getJwt() {
  // Maybe check for expiration date and if it even exists
  const jwt = Cookie.get("auth");
  return jwt;
}

// export const login = async (identifier, password) => {
//   //prevent function from being ran on the server
//   if (typeof window === "undefined") {
//     return;
//   }

//   return axios.post(`${STRAPI_URL}/auth/local`, {
//     identifier,
//     password,
//   });

// return new Promise((resolve, reject) => {

//   axios
//     .post(`${STRAPI_URL}/auth/local/`, { identifier, password })
//     .then((res) => {
//       //set token response from Strapi for server validation
//       Cookie.set("token", res.data.jwt);

//       //resolve the promise to set loading to false in SignUp form
//       resolve(res);
//       //redirect back to home page for restaurance selection
//       Router.push("/");
//     })
//     .catch((error) => {
//       //reject the promise and pass the error object back to the form
//       reject(error);
//     });
// });
// };

export const logout = () => {
  //remove token and user cookie
  Cookie.remove("auth");

  // const appContext = useContext(AppContext);
  // appContext.setUser(null);
  // delete window.__user;
  // // sync logout between multiple windows
  // window.localStorage.setItem("logout", Date.now());
  // //redirect to the home page

  // Router.push("/login");
};

export default {
  login,
  getJwt,
  logout,
};
