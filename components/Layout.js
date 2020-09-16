import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import _ from "lodash";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// import { logout } from "../lib/auth";
// import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const { user, setUser } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Ordit</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link href="/organizations" passHref>
              <Nav.Link>Orgs</Nav.Link>
            </Link>

            <Link href="/test" passHref>
              <Nav.Link>Test</Nav.Link>
            </Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link href="/organizations" passHref>
                <NavDropdown.Item>Organizations</NavDropdown.Item>
              </Link>
              <Link href="/test" passHref>
                <NavDropdown.Item>Test</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/test" passHref>
                <NavDropdown.Item>Test</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          {/* Below is pushed to the right */}
          <Nav className="ml-auto">
            {_.isEmpty(user) ? (
              <>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
                <Link href="/forgotpw" passHref>
                  <Nav.Link>Forgot Password</Nav.Link>
                </Link>
              </>
            ) : (
              // <Link href="/login" passHref>

              <Nav.Link
                onClick={() => {
                  logout();
                  // setUser({ user: null });
                  setUser(null);
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>

          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <div>{props.children}</div>
    </>
  );

  // return (
  //   <div>
  //     <Head>
  //       <title>Ordit</title>
  //       <meta charSet="utf-8" />
  //       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  //     </Head>

  //     <div>
  //       <Link href="/">
  //         <a>Home&nbsp;</a>
  //       </Link>
  //     </div>
  //     <div>
  //       <Link href="/organizations">
  //         <a>Organizations&nbsp;</a>
  //       </Link>
  //     </div>
  //     <div>
  //       <Link href="/test">
  //         <a>Test&nbsp;</a>
  //       </Link>
  //     </div>
  // {_.isEmpty(user) ? (
  //   <>
  //     <div>
  //       <Link href="/login">
  //         <a>Login&nbsp;</a>
  //       </Link>
  //     </div>
  //     <div>
  //       <Link href="/forgotpw">
  //         <a>Forgot Password&nbsp;</a>
  //       </Link>
  //     </div>
  //   </>
  // ) : (
  //   <div>
  //     <Link href="/login">
  //       <a
  //         onClick={() => {
  //           logout();
  //           // setUser({ user: null });
  //           setUser(null);
  //         }}
  //       >
  //         Logout&nbsp;
  //       </a>
  //     </Link>
  //     {/* <div>
  //       <Link href="/resetpw">
  //         <a>Reset Password&nbsp;</a>
  //       </Link>
  //     </div> */}
  //   </div>
  // )}
  //     {_.isEmpty(user) && (
  //       <div>
  //         <Link href="/register">
  //           <a>Register</a>
  //         </Link>
  //       </div>
  //     )}
  //     <div>
  //       {_.isEmpty(user) ? (
  //         <h4>You are not logged in</h4>
  //       ) : (
  //         <p>
  //           You are logged in as {user.username} and your email is {user.email}
  //         </p>
  //       )}
  //     </div>
  //     <div>{props.children}</div>
  //   </div>
  // );
}
