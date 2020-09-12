import Router from "next/router";
import Link from "next/link";
import http from "../lib/httpService";
// import AppContext from "../context/AppContext";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </div>
  );
}
