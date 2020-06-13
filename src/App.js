import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Pagination from "react-js-pagination";
import UsersList from "./components/UsersList";
import Loader from "react-loader-spinner";

const USERS_ON_PAGE = 5;

function App() {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.github.com/users").then((users) => {
      const totalPage = users.data.length;
      setUsers(users.data);
      setTotalPage(totalPage);
      setCurrentPage(1);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const currentUsers = users.slice(
      currentPage * USERS_ON_PAGE - USERS_ON_PAGE,
      currentPage * USERS_ON_PAGE
    );
    setDisplayUsers(currentUsers);
  }, [currentPage]);

  const paginationChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
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
          <div className="UsersListWrapper">
            <UsersList data={displayUsers} />
          </div>
        )}
        <div className="PaginationListWrapper">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={USERS_ON_PAGE}
            totalItemsCount={totalPage}
            pageRangeDisplayed={USERS_ON_PAGE}
            onChange={paginationChange}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
