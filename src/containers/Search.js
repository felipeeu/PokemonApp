import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { addToFavorites, selectPokemon } from "../actions/index";
import { withRouter } from "react-router";
import { useStyles } from "./Home";

const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

const Search = ({ pokemon, history, addToFavorites, selectPokemon }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {!isEmpty(pokemon) ? (
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                PoKemon {pokemon && pokemon.name}
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item key={pokemon && pokemon.name} xs={12}>
                <Card className={classes.card}>
                  <CardActions className={classes.cardActions}>
                    <Button
                      onClick={() => {
                        selectPokemon(pokemon.id);
                        history.push(`/details/${pokemon.id}`);
                      }}
                      size="small"
                      color="primary"
                    >
                      Details
                    </Button>
                    <IconButton
                      onClick={() => addToFavorites(pokemon)}
                      size="small"
                      color="primary"
                    >
                      <FavoriteIcon color="secondary" />
                    </IconButton>
                  </CardActions>
                  <CardMedia
                    className={classes.cardMedia}
                    image={
                      `${pokemon.sprites &&
                        pokemon.sprites.other.dream_world.front_default}` || ""
                    }
                    title={pokemon && pokemon.name}
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: pokemon => dispatch(addToFavorites(pokemon)),
    selectPokemon: pokemonId => dispatch(selectPokemon(pokemonId))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
