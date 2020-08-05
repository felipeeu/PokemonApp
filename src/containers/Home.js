import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import {addToFavorites} from "../actions/index"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const Home = ({ tenPokemons, setOffset, offset , addToFavorites }) => {
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
              Sobre o catálogo
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={() =>
                      setOffset(offset === 0 || !offset ? 0 : offset - 10)
                    }
                    variant="outlined"
                    color="primary"
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => setOffset(offset + 10)}
                    variant="outlined"
                    color="primary"
                  >
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
            {tenPokemons &&
              tenPokemons.map(pokemon => (
                <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`${pokemon.sprites.other.dream_world.front_default}`}
                      title={pokemon.name}
                    />
                    {/* <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pokemon.name}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent> */}
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button onClick={()=> addToFavorites(pokemon)}  size="small" color="primary">
                        Adicionar aos Favoritos
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
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
        <Copyright />
      </footer>
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
    
    addToFavorites:(pokemon) => dispatch(addToFavorites(pokemon)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
