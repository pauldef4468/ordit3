import Link from "next/link";
import _ from "lodash";

function Loading({ user, redirectParam }) {
  function getRedirect(redirectP) {
    if (!redirectP) return null;
    return `?redirect=${redirectP}`;
  }

  if (_.isEmpty(user)) {
    return (
      <div>
        <p>
          You are not logged in please{" "}
          <Link href={`/login${getRedirect(redirectParam)}`}>login</Link> or{" "}
          <Link href={`/register${getRedirect(redirectParam)}`}>register</Link>.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Retrieving data...</p>
      </div>
    );
  }
}

export default Loading;
