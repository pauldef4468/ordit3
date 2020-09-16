import cookie from "cookie";
import http from "../../lib/httpService";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default async (req, res) => {
  if (req.method === "POST") {
    //*** Call strapi login api ***
    const strapiEndpoint = STRAPI_URL + "/auth/local";
    //Send data - the identifier can be email or user name
    const data = {
      identifier: req.body.identifier,
      password: req.body.password,
    };
    try {
      //Call to strapi
      const response = await http.post(strapiEndpoint, data);

      //Set a cookie with jwt
      const jwt = response.data.jwt;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", jwt, {
          httpOnly: false,
          secure: process.env.NODE_ENV !== "development",
          path: "/",
          //maxAge: 3600,
          //sameSite: 'strict'
        })
      );
      //Send a response with the data
      res.json(response.data);
    } catch (ex) {
      //Handle error
      if (ex.response && ex.response.status === 400) {
        res.status(400).json({ message: "Bad Request" });
      } else {
        res
          .status(ex.response.status)
          .json({ message: "Something Went Wrong" });
      }
    }
  } else {
    res.status(405).json({ message: "Only POST is supported" });
  }
};
