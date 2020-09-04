import http from "./httpService";
import { getJwt } from "../lib/auth";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getMe() {
  const jwt = getJwt();
  const url = `${STRAPI_URL}/users/me`;
  return await http.get(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}

//   try {
//     // Get the jwt from the "auth" cookie using our auth service
//     const jwt = getJwt();
//     // If not defined or null or whatever then send to login page
//     if (!jwt) {
//       Router.push("/login");
//       return;
//     }
//     // This next stuff will be put into a service
//     const response = await http.get("http://localhost:1337/restaurants", {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     });
//   } catch (e) {
//     // ** This should only be known 400 erros
//     // ** All unexpected errors are handled by httpService

//     //Redirect to the login page
//     console.log("Failed");
//   }
