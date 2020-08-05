import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch } from "react-router";
import Home from "./Home";
import Favorites from "./Favorites";
import { connect } from "react-redux";
import { getPokemons, resetStore } from "../actions/index";

function App({ tenPokemons, getPokemons ,resetStore }) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemons(offset, 10);
    resetStore();
  }, [offset]);

  console.log("PROPS", tenPokemons);
  return (
    <Switch>
      <Route exact path="/">
        <Home tenPokemons={tenPokemons} offset={offset} setOffset={setOffset} />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
}

const mapStateToProps = store => ({
  tenPokemons: store.pokemons.tenPokemons,
  pokemon: store.pokemons.pokemon
});

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: (limit, offset) => dispatch(getPokemons(limit, offset)),
    resetStore: () => dispatch(resetStore())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
