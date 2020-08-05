import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { deleteFromFavorites, selectPokemon } from "../actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
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
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Favorites = ({ favorites, deleteFromFavorites, selectPokemon }) => {
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
              PoKemons Favoritos
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Sobre o catálogo
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Previous
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Next
                  </Button>
                </Grid>
              </Grid>
            </div>
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
                    <CardActions>
                      <Button
                        onClick={() => selectPokemon(pokemon.id)}
                        size="small"
                        color="primary"
                      >
                        Detalhes
                      </Button>
                      <Button
                        onClick={() => deleteFromFavorites(pokemon.id)}
                        size="small"
                        color="primary"
                      >
                        Deletar
                      </Button>
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

export default connect(null, mapDispatchToProps)(Favorites);
