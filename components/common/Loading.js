import Link from "next/link";
import _ from "lodash";

function Loading({ user }) {
  if (_.isEmpty(user)) {
    return (
      <div>
        <p>You are not logged in please login or sign up</p>
        <Link href="/login">
          <a>Login&nbsp;</a>
        </Link>
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
