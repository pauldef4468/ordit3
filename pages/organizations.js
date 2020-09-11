import { useContext, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { getOrganizations } from "../lib/organizationService";
import AppContext from "../context/AppContext";
import Loading from "../components/common/Loading";
import _ from "lodash";

function Organizations() {
  // Get the logged in user
  const { user } = useContext(AppContext);

  // Initialize the data we will display
  const [data, setData] = useState(null);

  // Function to retrieve the organization data
  async function getOrgs() {
    try {
      const response = await getOrganizations();
      const newData = response.data;
      setData(newData);
    } catch (e) {
      console.error(e);
      alert("Something went wrong retrieving data");
    }
  }

  useEffect(() => {
    // Don't try to get data if not logged in
    if (_.isEmpty(user)) return;

    // Call the function to get data
    getOrgs();
  }, [user]);

  return (
    <div>
      <h1>Organizations Page </h1>
      {data ? (
        data.map((org) => {
          return (
            <div key={org.id}>
              <Link href="/organization/[id]" as={`/organization/${org.id}`}>
                <a>
                  {org.name} {org.id}
                </a>
              </Link>
            </div>
          );
        })
      ) : (
        <Loading user={user} />
      )}
    </div>
  );
}

export default Organizations;
