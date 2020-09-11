import http from "./httpService";
import auth from "../lib/auth";
import AppContext from "../context/AppContext";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getOrganizations() {
  const url = `${STRAPI_URL}/organizations`;
  const authHeader = auth.setAuthHeaderObj();
  return await http.get(url, authHeader);
}
export async function getOrganization(id) {
  const url = `${STRAPI_URL}/organizations/${id}`;
  const authHeader = auth.setAuthHeaderObj();
  return await http.get(url, authHeader);
}
