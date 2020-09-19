import Router from "next/router";
import Cookie from "js-cookie";
import http from "./httpService";

export async function login(email, password) {
  // Use our login api which will use strapi api
  // Our server also sets an "auth" cookie with the jwt
  return await http.post("/api/login", {
    identifier: email,
    password,
  });
}

export async function register(username, password, email, firstName, lastName) {
  const url = "/api/register";
  return await http.post(url, {
    username: username,
    password: password,
    email: email,
    firstName: firstName,
    lastName: lastName,
  });
}

export function getJwt() {
  // Maybe check for expiration date and if it even exists
  const jwt = Cookie.get("auth");
  return jwt;
}

export function setAuthHeaderObj() {
  return {
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  };
}

export const logout = () => {
  //remove token and user cookie
  Cookie.remove("auth");

  // const appContext = useContext(AppContext);
  // appContext.setUser(null);
  // delete window.__user;
  // // sync logout between multiple windows
  // window.localStorage.setItem("logout", Date.now());
  // //redirect to the home page

  Router.push("/login");
};

export default {
  login,
  register,
  getJwt,
  logout,
  setAuthHeaderObj,
};
