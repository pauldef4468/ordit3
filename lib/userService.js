import http from "./httpService";
import auth from "../lib/auth";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getMe() {
  const url = `${STRAPI_URL}/users/me`;
  const authHeader = auth.setAuthHeaderObj();
  return await http.get(url, authHeader);
}

async function forgotPassword(email) {
  const url = `${STRAPI_URL}/auth/forgot-password`;
  return await http.post(url, { email: email });
}

async function update(data, id) {
  const url = `${STRAPI_URL}/users/${id}`;
  console.log(url);
  const authHeader = auth.setAuthHeaderObj();

  console.log(authHeader);
  return await http.put(url, data, authHeader);
}

async function resetPassword(code, password, passwordConfirmation) {
  const url = `${STRAPI_URL}/auth/reset-password`;
  return await http.post(url, {
    code: code,
    password: password,
    passwordConfirmation: passwordConfirmation,
  });
}

export { resetPassword, forgotPassword, update };
