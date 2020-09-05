import Link from "next/link";
import Router from "next/router";
import auth from "../lib/auth";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { getMe } from "../lib/userService";

const ORDIT_URL = process.env.NEXT_PUBLIC_ORDIT_URL || "http://localhost:3000";

function Login(props) {
  const { user, setUser } = useContext(AppContext);

  async function doSubmit(e) {
    try {
      // Login and server will set cookie with name "auth"
      await auth.login("user1", "user123");
      const response = await getMe();
      const user = response.data;

      setUser(user);

      Router.push("/");
    } catch (e) {
      console.log("Login failed");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={doSubmit}>
        Click to login
      </button>
    </div>
  );
}

export default Login;
