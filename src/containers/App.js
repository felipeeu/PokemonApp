import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Search from "./Search";
import 
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
  }
}));

function App({
  tenPokemons,
  getPokemons,
  getPokemonByName,
  filteredByName,
  favorites,
  resetStore,
  history
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
          <Link to={"/"}>
            <Typography variant="h6" color="secondary" noWrap>
              Catálogo de Pokemons
            </Typography>
          </Link>

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
            Buscar
          </Button>
        </Toolbar>
      </AppBar>
      <Button
        onClick={() => history.push("/favorites")}
        variant="contained"
        color="secondary"
      >
        favoritos
      </Button>
      <Switch>
        <Route exact path="/">
          <Home
            tenPokemons={tenPokemons}
            offset={offset}
            setOffset={setOffset}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites} />
        </Route>
        <Route path="/detail/:id">
          </>
        </Route>
        <Route path="/search">
          <Search pokemon={filteredByName || {}} />
        </Route>
      </Switch>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </React.Fragment>
  );
}

const mapStateToProps = store => ({
  tenPokemons: store.pokemons.tenPokemons,
  favorites: store.pokemons.favorites,
  filteredByName: store.pokemons.pokemonByName
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
