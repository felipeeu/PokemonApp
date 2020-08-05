import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Loader from "../components/Loader"
import PokemonDetails from "../components/PokemonDetail"

const useStyles = makeStyles(theme => ({
  
  
}));

const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

const Details = ({ pokemon }) => {
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
              <Grid item key={pokemon && pokemon.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <PokemonDetails pokemon={pokemon}/>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      ) : (
        <Loader/>
      )}
    </React.Fragment>
  );
};

export default Details;
