import { useState } from "react";
import Router from "next/router";
import auth from "../lib/auth";
import AppContext from "../context/AppContext";
import { useContext } from "react";

function Login(props) {
  const [data, setData] = useState({ username: "user1", password: "user123" });

  const [errors, setErrors] = useState(null);
  const { user, setUser } = useContext(AppContext);

  async function doSubmit(e) {
    e.preventDefault();
    try {
      // Login and server will set cookie with name "auth"
      const response = await auth.login(data.username, data.password);
      const user = response.data.user;
      setUser(user);

      Router.push("/");
    } catch (e) {
      console.error("Login failed");
    }
  }

  function handleChange({ currentTarget: input }) {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={doSubmit}>
        <label htmlFor="username">User Name:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
