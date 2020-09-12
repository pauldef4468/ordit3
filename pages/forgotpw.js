import { useState } from "react";
import Router from "next/router";
import { forgotPassword } from "../lib/userService";

function ResetPw() {
  const [data, setData] = useState({ email: "" });

  //   const [errors, setErrors] = useState(null);

  async function doSubmit(e) {
    e.preventDefault();
    try {
      // Login and server will set cookie with name "auth"
      //   const response = await auth.login(data.username, data.password);
      //   const user = response.data.user;
      //   setUser(user);

      const response = await forgotPassword(data.email);
      alert("Email sent");
      Router.push("/");
    } catch (e) {
      alert("Forgot password failed");
      console.error("Forgot password failed");
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
      <h1>Forgot Password</h1>
      <form onSubmit={doSubmit}>
        <label htmlFor="password">Please enter email:</label>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ResetPw;
