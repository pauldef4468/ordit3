import http from "./httpService";
import auth from "./auth";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getEstablishments() {
  const url = `${STRAPI_URL}/restaurants`;
  return await http.get(url);
}

export async function getEstablishment(id) {
  const url = `${STRAPI_URL}/restaurants/${id}`;
  return await http.get(url);
}

// export async function getOrganization(id) {
//   const url = `${STRAPI_URL}/organizations/${id}`;
//   const authHeader = auth.setAuthHeaderObj();
//   return await http.get(url, authHeader);
// }
