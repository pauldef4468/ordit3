import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import _ from "lodash";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";

// import { logout } from "../lib/auth";
// import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>Ordit</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        /> */}
        {/* <script src="https://js.stripe.com/v3" /> */}
      </Head>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/test">
        <a>Test</a>
      </Link>

      {_.isEmpty(user) ? (
        <Link href="/login">
          <a className="navbar-link">Login</a>
        </Link>
      ) : (
        <Link href="/login">
          <a
            className="nav-link"
            onClick={() => {
              logout();
              // setUser({ user: null });
              setUser(null);
            }}
          >
            Logout
          </a>
        </Link>
      )}
      <div>{props.children}</div>
    </div>
  );
}
