import "./App.css";
import HeroList from "./components/pages/HeroListPage/HeroList.js";
import Detail from "./components/pages/DetailsPage/Detail.js";
import MessagesPage from "./components/pages/MessagesPage/MessagesPage.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios({
      methods: "GET",
      url: "https://60dff0ba6b689e001788c858.mockapi.io/heroes",
    }).then((response) => {
      console.log(response.data);
      setHeroes(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Tour of Heroes</h1>
      <h2 className="hero-heading">My Heroes</h2>
      <HeroList
        heroes={heroes}
        setHeroes={setHeroes}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        message={message}
        setMessage={setMessage}
      />
      <Detail
        heroes={heroes}
        setHeroes={setHeroes}
        selectedItem={selectedItem}
      />
      <MessagesPage message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
