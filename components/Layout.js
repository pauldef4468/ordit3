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
      </Head>

      <div>
        <Link href="/">
          <a>Home&nbsp;</a>
        </Link>
      </div>
      <div>
        <Link href="/organizations">
          <a>Organizations&nbsp;</a>
        </Link>
      </div>
      <div>
        <Link href="/test">
          <a>Test&nbsp;</a>
        </Link>
      </div>
      {_.isEmpty(user) ? (
        <>
          <div>
            <Link href="/login">
              <a>Login&nbsp;</a>
            </Link>
          </div>
          <div>
            <Link href="/forgotpw">
              <a>Forgot Password&nbsp;</a>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <Link href="/login">
            <a
              onClick={() => {
                logout();
                // setUser({ user: null });
                setUser(null);
              }}
            >
              Logout&nbsp;
            </a>
          </Link>
          {/* <div>
            <Link href="/resetpw">
              <a>Reset Password&nbsp;</a>
            </Link>
          </div> */}
        </div>
      )}
      {_.isEmpty(user) && (
        <div>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      )}
      <div>
        {_.isEmpty(user) ? (
          <h4>You are not logged in</h4>
        ) : (
          <p>
            You are logged in as {user.username} and your email is {user.email}
          </p>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
}
