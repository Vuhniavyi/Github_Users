import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import Loader from "react-loader-spinner";

function UserPage(props) {
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${props.match.params.user}`)
      .then((singleUser) => {
        setSingleUser(singleUser.data);
        setLoading(false);
      });
  }, []);

  return (
    singleUser && (
      <div className="wrapper">
        <main className="main">
          {loading ? (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              className="loading"
            />
          ) : (
            <div className="singleUserWrapper">
              <a
                className="imgAvatar"
                href={singleUser.html_url}
                target="_BLANK"
                rel="noopener noreferrer"
              >
                <img src={singleUser.avatar_url} width="120px" alt="ava" />
              </a>
              <div className="singleUserInf">
                <a
                  className="name"
                  href={singleUser.html_url}
                  target="_BLANK"
                  rel="noopener noreferrer"
                >
                  {singleUser.name
                    ? singleUser.name
                    : "The user did not provide his name"}
                </a>
                <div className="company">
                  {singleUser.company
                    ? singleUser.company
                    : "The user did not provide his company"}
                </div>
                <div className="date">
                  From{" "}
                  <Moment format="DD/MM/YYYY">
                    {singleUser.created_at ? singleUser.created_at : ""}
                  </Moment>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    )
  );
}

export default UserPage;
