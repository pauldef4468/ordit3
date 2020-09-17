import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getOrganization } from "../../lib/organizationService";
import AppContext from "../../context/AppContext";
import Loading from "../../components/common/Loading";
import MyNavbar from "../../components/myNavbar";
import _ from "lodash";

function Organization(props) {
  // Initialize the data we will display
  const [org, setOrg] = useState(null);

  // Get the logged in user
  const { user } = useContext(AppContext);
  const router = useRouter();
  const orgId = router.query.id; // Query is an empty object {} if page loaded from server

  // Function to retrieve the organization data
  async function getOrg() {
    try {
      const response = await getOrganization(orgId);
      const newOrg = response.data;
      setOrg(newOrg);
    } catch (e) {
      console.error(e);
      alert("Something went wrong retrieving data");
    }
  }

  useEffect(() => {
    // This only runs when user and orgId changes
    // Only try to get the data if we have valid data
    if (_.isEmpty(user)) return;
    if (!orgId) return;
    // Call the function to get data
    getOrg();
  }, [user, orgId]);

  return (
    <div>
      <MyNavbar activeLink="organizations"></MyNavbar>
      <Container>
        {org ? (
          <div>
            <h1>{org.name}</h1>
            <h4>{org.description}</h4>
          </div>
        ) : (
          <Loading user={user} />
        )}
      </Container>
    </div>
  );
}

export default Organization;
