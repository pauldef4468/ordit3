import Link from "next/link";
import cookies from "next-cookies";

function test() {
  return (
    <div>
      <h1>Test Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default test;
