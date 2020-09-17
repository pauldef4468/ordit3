import { useState, useEffect } from "react";
import Cookie from "js-cookie";

import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import { getJwt } from "../lib/auth";
import { getMe } from "../lib/userService";
import _ from "lodash";
import "../styles/customTheme.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /** MyApp will run on every page load using any navigation method */

  // Initialize the "user"
  const [user, setUser] = useState({});

  // console.log("Here in myApp");

  useEffect(() => {
    /** This useEffect will only run one time and on the client if using Link or Router and 
      everytime full reload of the page using the browser navigation
    */

    // If the jwt is set then get the user from the server and set the user
    const jwt = getJwt();
    // Function to call from below
    async function getUser() {
      try {
        // Logged in so set the user object
        const response = await getMe();
        const user = response.data;
        setThisUser(user);
      } catch (e) {
        // Not logged in or has expired, remove the jwt cookie
        Cookie.remove("auth");
        setUser({});
        return null;
      }
    }
    // Call the above logic
    if (jwt) {
      getUser();
    }
  }, []);

  // Function used to set the user which will update the context when this renders
  const setThisUser = (newUser) => {
    //Set the state variable with this new user object
    //This will cause this page to render
    // setUserObj({ user: newUserObj });
    // console.log(newUser, "Here in setThisUser");
    setUser(newUser);
  };

  return (
    <AppContext.Provider
      value={{
        user: user,
        isAuthenticated: !_.isEmpty(user),
        setUser: setThisUser,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
