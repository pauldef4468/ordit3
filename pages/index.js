import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
// import styles from "../styles/Home.module.css";
import { Button } from "reactstrap";
import Link from "next/link";
import cookies from "next-cookies";
import http from "../lib/httpService";
import { getJwt } from "../lib/auth";
import AppContext from "../context/AppContext";

export default function Home() {
  // 1) are we authenticated and if so display the user info somewhere
  // 2) every page needs to display the user info when authenticated

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
      <div>
        <Button color="primary" onClick={doSubmit}>
          Get all
        </Button>
      </div>
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
