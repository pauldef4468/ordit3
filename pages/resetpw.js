import { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { resetPassword } from "../lib/userService";

function ResetPw() {
  const [data, setData] = useState({ password: "", passwordConfirmation: "" });
  const router = useRouter();
  const code = router.query.code;
  console.log(code);
  //   if (!code) {
  //     Router.push("/");
  //   }
  //   const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!code) {
      Router.push("/");
    }
  }, []);

  async function doSubmit(e) {
    e.preventDefault();
    try {
      const response = await resetPassword(
        code,
        data.password,
        data.passwordConfirmation
      );

      Router.push("/login");
    } catch (e) {
      alert("Reset failed");
      console.error("Reset failed");
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
      <h1>Reset Password</h1>
      <form onSubmit={doSubmit}>
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
        <label htmlFor="passwordConfirmation">Confirm Password:</label>
        <br />
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          value={data.passwordConfirmation}
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
