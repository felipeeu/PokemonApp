import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch } from "react-router";
import Home from "./Home";
import Favorites from "./Favorites";
import Search from "./Search";
import Details from "./Details";
import { connect } from "react-redux";
import {
  getPokemons,
  getFavorites,
  getPokemonByName,
  resetStore
} from "../actions/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  search: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    right: "100px"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  buttonSearch: {
    position: "absolute",
    right: "5px"
  },
  buttonFavorites: {
    position: "absolute",
    top: "20%",
    right: "50px"
  }
}));

function App({
  tenPokemons,
  getPokemons,
  getPokemonByName,
  filteredByName,
  favorites,
  resetStore,
  history,
  selectedPokemon
}) {
  const classes = appStyles();
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getPokemons(offset, 10);
    resetStore();
  }, [offset]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid onClick={() => history.push("/")}>
            <Typography variant="h6" color="secondary" noWrap>
              PokeDex
            </Typography>
          </Grid>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button
            onClick={() => {
              getPokemonByName(searchValue);
              history.push("/search");
            }}
            size="small"
            variant="text"
            className={classes.buttonSearch}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <Grid className={classes.buttonFavorites}>
        <Button
          onClick={() => history.push("/favorites")}
          variant="contained"
          color="secondary"
        >
          favorites
        </Button>
      </Grid>
      <Switch>
        <Route exact path="/">
          <Home
            tenPokemons={tenPokemons}
            offset={offset}
            setOffset={setOffset}
          />
        </Route>
        <Route path="/search">
          <Search pokemon={filteredByName || {}} />
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites} />
        </Route>
        <Route path="/details/:id">
          <Details pokemon={selectedPokemon} />
        </Route>
      </Switch>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          By_Felipe_Domingues
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Made by Felipe Domingues using Material-UI!
        </Typography>
      </footer>
    </React.Fragment>
  );
}

const mapStateToProps = store => ({
  tenPokemons: store.pokemons.tenPokemons,
  favorites: store.pokemons.favorites,
  filteredByName: store.pokemons.pokemonByName,
  selectedPokemon: store.pokemons.pokemonSelected
});

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: (limit, offset) => dispatch(getPokemons(limit, offset)),
    getFavorites: () => dispatch(getFavorites()),
    getPokemonByName: name => dispatch(getPokemonByName(name)),
    resetStore: () => dispatch(resetStore())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
