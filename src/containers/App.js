import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";
import { withRouter,Route, Switch } from "react-router";
import Home from "./Home";
import Favorites from "./Favorites";

function App() {
  const [payloadPokemon, setPayloadPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
      .then(response =>
        response ? setPayloadPokemon(response.data.results) : null
      );
  }, [offset]);

  return (
    // <div className="App">
    //   {payloadPokemon &&
    //     payloadPokemon.map((pokemon, idx) => <div key={idx}>{pokemon.name}</div>)}
    //     <button onClick= {()=> setOffset(offset+ 10)  }>previous</button>
    //     <button onClick= {()=> setOffset(offset +10)} >next</button>
    // </div>
    <Switch>
      <Route exact path="/">
        <Home
          payloadPokemon={payloadPokemon}
          offset={offset}
          setOffset={setOffset}
        />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
}

export default  withRouter(App);
