import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { deleteFromFavorites, selectPokemon } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { useStyles } from "./Home";

const Favorites = ({
  favorites,
  deleteFromFavorites,
  selectPokemon,
  history
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Favorites PoKemons
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {favorites &&
              favorites.map(pokemon => (
                <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`${pokemon.sprites.other.dream_world.front_default}`}
                      title={pokemon.name}
                    />
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
                        onClick={() => deleteFromFavorites(pokemon.id)}
                        size="small"
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromFavorites: id => dispatch(deleteFromFavorites(id)),
    selectPokemon: pokemonId => dispatch(selectPokemon(pokemonId))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Favorites));
