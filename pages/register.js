import { useState } from "react";
import Router from "next/router";
import auth from "../lib/auth";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const ORDIT_URL = process.env.NEXT_PUBLIC_ORDIT_URL || "http://localhost:3000";

function Register(props) {
  const [data, setData] = useState({ username: "", password: "", email: "" });

  const [errors, setErrors] = useState(null);
  const { user, setUser } = useContext(AppContext);

  async function doSubmit(e) {
    e.preventDefault();
    try {
      // Login and server will set cookie with name "auth"
      const response = await auth.register(
        data.username,
        data.password,
        data.email
      );
      const user = response.data.user;
      //   const response = await getMe();
      //   const user = response.data;

      setUser(user);

      Router.push("/");
    } catch (e) {
      alert("Registration Failed");
      console.error("Registration failed");
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
      <h1>Register</h1>
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
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
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

export default Register;
