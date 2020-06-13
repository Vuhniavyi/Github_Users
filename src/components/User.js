import React from "react";
import { Link } from "react-router-dom";

const User = (props) => (
  <div className="oneUser">
    <div className="linksWrapper">
      <Link to={`/${props.login}`} className="ava">
        <img src={props.avatar} width="100px" alt="ava" />
      </Link>
      <Link to={`/${props.login}`} className="login">
        {props.login}
      </Link>
    </div>
    <a
      href={props.url}
      target="_BLANK"
      rel="noopener noreferrer"
      className="button"
    >
      <p>Кнопка</p>
    </a>
  </div>
);

export default User;
