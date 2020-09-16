import Link from "next/link";
import { Container, Button } from "react-bootstrap";

function test() {
  return (
    <Container className="container-fluid">
      <h1>Test Page</h1>

      <Link href="/" passHref>
        <Button>Home</Button>
      </Link>
    </Container>
  );
}

export default test;
