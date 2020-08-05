import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch} from "react-router";
import {Link} from "react-router-dom"
import Home from "./Home";
import Favorites from "./Favorites";
import { connect } from "react-redux";
import { getPokemons, getFavorites ,resetStore } from "../actions/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

function App({ tenPokemons, getPokemons ,favorites,resetStore, history }) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemons(offset, 10);
    resetStore();
  }, [offset]);

  console.log("Favorites", favorites);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Catálogo de Pokemons
          </Typography>
          <Button onClick={()=>history.push("/favorites")}  variant="contained" color="secondary" >favoritos</Button>
        </Toolbar>
        
      </AppBar>
    <Switch>
      <Route exact path="/">
        <Home tenPokemons={tenPokemons} offset={offset} setOffset={setOffset} />
      </Route>
      <Route path="/favorites">
        <Favorites favorites={favorites} />
      </Route>
    </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = store => ({
  tenPokemons: store.pokemons.tenPokemons,
  pokemon: store.pokemons.pokemon,
  favorites: store.pokemons.favorites
});

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: (limit, offset) => dispatch(getPokemons(limit, offset)),
    getFavorites:() => dispatch(getFavorites()),
    resetStore: () => dispatch(resetStore())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
