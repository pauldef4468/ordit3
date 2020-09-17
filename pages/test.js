import Link from "next/link";
import { Container, Button } from "react-bootstrap";
import MyNavbar from "../components/myNavbar";

function test() {
  return (
    <>
      <MyNavbar activeLink="test" />
      <Container>
        <h1>Test Page</h1>
        <Link href="/" passHref>
          <Button>Home</Button>
        </Link>
      </Container>
    </>
  );
}

export default test;
