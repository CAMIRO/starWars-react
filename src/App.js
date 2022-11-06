import React, { useEffect, useState } from "react";
import axios from "axios";

import { List } from "./components/List";
import { GlobalStyle } from "./globalStyles";
function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <List people={people} />
      <GlobalStyle />
    </div>
  );
}

export default App;
