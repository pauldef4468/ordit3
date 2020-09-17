import Router from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";
import http from "../lib/httpService";
import MyNavbar from "../components/myNavbar";
// import AppContext from "../context/AppContext";

export default function Home() {
  return (
    <>
      <MyNavbar activeLink="home"></MyNavbar>
      <Container>
        <h1>Home Page</h1>
      </Container>
    </>
  );
}

{
  /* <Link href="/forgotpw" passHref>
<Nav.Link>Forgot Password</Nav.Link>
</Link> */
}
