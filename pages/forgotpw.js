import { useState } from "react";
import Router from "next/router";
import { Container } from "react-bootstrap";
import { forgotPassword } from "../lib/userService";
import FormUtil from "../components/common/form";
import MyNavbar from "../components/myNavbar";
import Joi from "joi-browser";

function ResetPw() {
  const [data, setData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [spinner, setSpinner] = useState(null);

  // I AM NOT CURRENTLY USING THIS NEXT LINE! USING TOAST MESSAGE GENERATED BY httpService
  // Use this logic if we want to display error messages under the input
  const [serverError, setServerError] = useState(null);

  const schema = {
    email: Joi.string().required().email().label("Email"),
  };

  async function doSubmit(e) {
    try {
      setSpinner(true);
      const response = await forgotPassword(data.email);
      // Add toast that says "Email sent" or something

      Router.push("/");
    } catch (e) {
      setSpinner(false);
      // Use toast here
      alert("Forgot password failed");
      console.error("Forgot password failed");
    }
  }

  const formUtil = new FormUtil(
    data,
    schema,
    errors,
    serverError,
    doSubmit,
    setData,
    setErrors,
    setServerError
  );

  return (
    <>
      <MyNavbar activeLink="forgotpw"></MyNavbar>
      <Container>
        <div className="small-center-form">
          <h3 className="mt-3">Forgot Password</h3>
          <form onSubmit={formUtil.handleSubmit}>
            {formUtil.renderInput("email", "Email", "text", null, null, false)}
            {formUtil.renderButton("Submit", spinner)}
          </form>
        </div>
      </Container>
    </>
  );
}

export default ResetPw;
