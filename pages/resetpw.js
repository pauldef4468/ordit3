import { useState, useEffect } from "react";
import Router from "next/router";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { resetPassword } from "../lib/userService";
import FormUtil from "../components/common/form";
import MyNavbar from "../components/myNavbar";
import Joi from "joi-browser";

function ResetPw() {
  const [data, setData] = useState({ password: "", passwordConfirmation: "" });
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const code = router.query.code;

  // I AM NOT CURRENTLY USING THIS NEXT LINE! USING TOAST MESSAGE GENERATED BY httpService
  // Use this logic if we want to display error messages under the input
  const [serverError, setServerError] = useState(null);

  const schema = {
    password: Joi.string().required().label("Email"),
    passwordConfirmation: Joi.string()
      .required()
      .label("Password Confirmation"),
  };
  //   const hasMounted = useHasMounted();
  //   if (!hasMounted) {
  //     return null;
  //   } else {
  //     return null;
  //   }

  //   if (!code) {
  //     Router.push("/");
  //   }
  //   const [errors, setErrors] = useState(null);

  //   useEffect(() => {
  //     console.log(code);
  //     if (!code) {
  //       console.log("here");
  //       //Router.push("/");
  //     }
  //   }, [code]);

  async function doSubmit(e) {
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
    <div>
      <MyNavbar></MyNavbar>
      <Container>
        <h3>Reset Password</h3>
        <form onSubmit={formUtil.handleSubmit}>
          {formUtil.renderInput(
            "password",
            "Password",
            "password",
            null,
            null,
            false
          )}
          {formUtil.renderInput(
            "passwordConfirmation",
            "Password Confirmation",
            "password",
            null,
            null,
            false
          )}
          {formUtil.renderButton("Submit")}
        </form>
      </Container>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   // Pass data to the page via props
//   return { props: { code1: ctx.query } };

// }

export default ResetPw;
