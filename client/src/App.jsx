import React, { useEffect, useState } from "react";
import "./styles/App.css";
import axios from "axios";
import axiosWithAuth from "./components/axiosWithAuth";

function App() {
  const user = { username: "Shane", password: "pass" };
  const [jokes, setJokes] = useState([]);
  const [message, setMessage] = useState();
  const api = "http://localhost:4000/api";

  useEffect(() => {
    console.log("User", user);
    console.log("Jokes API", `${api}/auth/login`);

    axios
      .post(`${api}/auth/login`, user)

      .then(res => {
        console.log("Message", res.data.message);
        const { token } = res.data;
        localStorage.setItem("token", token);
        setMessage(res.data.message);

        axiosWithAuth()
          .get(`${api}/jokes`)
          .then(jokesApi => {
            console.log("Response Data", jokesApi);
            setJokes(jokesApi.data);
          })
          .catch(err => {
            console.log("axiosWithAuth error", err);
          });
      })
      .catch(err => {
        console.log("axios error", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>{`${message}`}</h1>
      <div className="center">
        {jokes.map(i => (
          <div className="card">
            <p key={i.id}>{i.joke}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
