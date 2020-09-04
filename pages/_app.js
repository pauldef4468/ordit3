// import '../styles/globals.css'
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import { getJwt } from "../lib/auth";
import { getMe } from "../lib/userService";
import Cookie from "js-cookie";

function MyApp({ Component, pageProps }) {
  // From what I can tell this gets ran on every page load using any navigation method
  console.log("Entered MyApp");

  //Set the State variable to an object which contains a user property
  // const [userObj, setUserObj] = useState({ user: null });
  // const [userObj, setUserObj] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    // This only gets ran one time and on the client if using Link or Router and
    // everytime full reload of the page using the browser navigation
    console.log("Running useEffect");
    const jwt = getJwt();

    async function getUser() {
      try {
        const response = await getMe();
        const user = response.data;
        console.log(user);
        setThisUser(user);
      } catch (e) {
        console.log(
          "getMe got nothing so removing auth cookie if it's even there"
        );
        Cookie.remove("auth");
        // setUserObj({ user: null });
        setUser({});
        return null;
      }
    }

    if (jwt) {
      getUser();
    }
  }, []);

  const setThisUser = (newUserObj) => {
    //Set the state variable with this new user object
    //This will cause this page to render
    // setUserObj({ user: newUserObj });
    setUser(newUserObj);
  };

  return (
    <AppContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
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
