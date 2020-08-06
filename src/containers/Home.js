import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { addToFavorites, selectPokemon } from "../actions/index";
import { withRouter } from "react-router";

export const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: 'contain',
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  cardActions: {
    justifyContent: "space-between"
  }
}));


const Home = ({
  tenPokemons,
  setOffset,
  offset,
  addToFavorites,
  selectPokemon,
  history
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
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
              PokeDex
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              For Venturus Analysis
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <IconButton
                    onClick={() =>
                      setOffset(offset === 0 || !offset ? 0 : offset - 10)
                    }
                    variant="outlined"
                    color="primary"
                  >
                    <ArrowBack fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => setOffset(offset + 10)}
                    variant="outlined"
                    color="primary"
                  >
                    <ArrowForward fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {tenPokemons &&
              tenPokemons.map(pokemon => (
                <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`${pokemon.sprites.other.dream_world.front_default}`}
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
                        onClick={() => addToFavorites(pokemon)}
                        size="small"
                        color="primary"
                      >
                        <FavoriteIcon color="secondary" />
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

const mapStateToProps = store => ({
  tenPokemons: store.pokemons.tenPokemons,
  pokemon: store.pokemons.pokemon,
  favorites: store.pokemons.favorites
});

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: pokemon => dispatch(addToFavorites(pokemon)),
    selectPokemon: pokemonId => dispatch(selectPokemon(pokemonId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
