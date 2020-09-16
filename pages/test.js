import Link from "next/link";
import { Container, Button } from "react-bootstrap";

function test() {
  return (
    <>
      <h1>Test Page</h1>

      <Link href="/" passHref>
        <Button>Home</Button>
      </Link>
    </>
  );
}

export default test;
