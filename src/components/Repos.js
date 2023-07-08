import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";
import axios from "axios";

export default function Repos() {
  const { state, dispatch } = useContext(AuthContext);
  const [trendingRepos, setTrendingRepos] = useState([]);

  useEffect(() => {
    // Fetch trending repositories
    axios
      .get("https://api.gitterapp.com/developers?language=javascript&since=weekly")
      .then((response) => {
        setTrendingRepos(response.data);
      })
      .catch((error) => {
        console.log("Error fetching trending repositories:", error);
      });
  }, []);

  if (!state.isLoggedIn) {
    return <Redirect to="/callback" />;
  }

  // const { avatar_url, name, public_repos, followers, following } = state.user;

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div>
           <div className="trending-repos">
          <h2>Trending Repositories</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {trendingRepos.map((repo) => (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{repo.username}</td>
                  <td>
                    <a href={repo.url} target={repo.url} rel="noopener noreferrer">
                      {repo.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
      </div>
       
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: Arial;

  button {
    all: unset;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 100px;
    height: 35px;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #0041C2;
    }
  }

  table {
    margin-top: 50px;
    border-collapse: collapse;

    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      font-weight: bold;
    }

    tbody tr:hover {
      background-color: #f5f5f5;
    }

    a {
      color: #0041c2;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #002f7a;
      }
    }
  }
}
`;
