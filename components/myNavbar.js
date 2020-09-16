import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";
import { logout } from "../lib/auth";
import _ from "lodash";

function MyNavbar(props) {
  const { user, setUser } = useContext(AppContext);
  return (
    <div>
      <Navbar bg="light" variant="light" expand="md">
        <Navbar.Brand href="#">Ordit</Navbar.Brand>
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

          {/* <Nav className="ml-auto">
            <NavDropdown
              className="mr-2"
              title="User Info"
              id="basic-nav-dropdown"
            >
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
          </Nav> */}

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
                <Link href="/register" passHref>
                  <Nav.Link>Register</Nav.Link>
                </Link>
              </>
            ) : (
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
