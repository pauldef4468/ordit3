import Link from "next/link";
import { Container, Button } from "react-bootstrap";

function test() {
  function setActive() {
    console.log("Here");
    document.getElementById("orglink").setAttribute("active", true);
  }
  return (
    <>
      <h1>Test Page</h1>

      <Link href="/" passHref>
        <Button onClick={setActive}>Home</Button>
      </Link>
    </>
  );
}

export default test;
