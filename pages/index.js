import Router from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";
import http from "../lib/httpService";
// import AppContext from "../context/AppContext";

export default function Home() {
  return (
    <Container className="container-fluid">
      <h1>Home Page</h1>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </Container>
  );
}

{
  /* <Link href="/forgotpw" passHref>
<Nav.Link>Forgot Password</Nav.Link>
</Link> */
}
