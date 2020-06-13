import React from "react";
import User from "./User";
import NoUser from "./NoUser";
import Grid from "@material-ui/core/Grid";

const UsersList = (props) => {
  const results = props.data;
  let users;
  if (results.length) {
    users = results.map((user) => (
      <User
        key={user.id}
        avatar={user.avatar_url}
        login={user.login}
        url={user.html_url}
        singleUrl={user.url}
      />
    ));
  } else {
    users = <NoUser />;
  }

  return (
    <Grid container direction="column" justify="center" className="UsersList">
      {users}
    </Grid>
  );
};

export default UsersList;
