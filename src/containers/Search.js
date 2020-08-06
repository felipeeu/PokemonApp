import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Loader from "../components/Loader";

import { useStyles } from "./Home";

const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

const Search = ({ pokemon }) => {
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
              <Grid item key={pokemon && pokemon.name} xs={12} >
                <Card className={classes.card}>
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

export default Search;
