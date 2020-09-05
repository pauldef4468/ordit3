import Router from "next/router";
import Link from "next/link";
import http from "../lib/httpService";
import { getJwt } from "../lib/auth";
// import AppContext from "../context/AppContext";

export default function Home() {
  async function doSubmit(e) {
    try {
      // Get the jwt from the "auth" cookie using our auth service
      const jwt = getJwt();
      // If not defined or null or whatever then send to login page
      if (!jwt) {
        Router.push("/login");
        return;
      }
      // This next stuff will be put into a service
      const response = await http.get("http://localhost:1337/restaurants", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    } catch (e) {
      // ** This should only be known 400 erros
      // ** All unexpected errors are handled by httpService
      //Redirect to the login page
      console.log("Failed");
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const { auth } = cookies(ctx);
//   let isAuthenticated = false;
//   if (auth) {
//     isAuthenticated = true;
//   }

//   return { props: { isAuthenticated: isAuthenticated } };
// }
