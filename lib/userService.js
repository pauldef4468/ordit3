import http from "./httpService";
import auth from "../lib/auth";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getMe() {
  const url = `${STRAPI_URL}/users/me`;
  const authHeader = auth.setAuthHeaderObj();
  return await http.get(url, authHeader);
}
