import React, { useEffect, useState } from "react";
import axios from "axios";

import { List } from "./components/List";
import { LoadingComponent } from "./components/LoadingComponent";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeople(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? <LoadingComponent /> : <List people={people} />}
      <GlobalStyle />
    </div>
  );
}

export default App;
