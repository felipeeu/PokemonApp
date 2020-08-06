import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Stats from "./Stats";
import { makeStyles } from "@material-ui/core/styles";

export const pokemonDetailStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  attributeContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50px"
  },
  attribute: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "20px"
  },
  attributeData: {
    paddingLeft: "10px"
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "30px"
  }
}));

const PokemonDetail = ({ pokemon }) => {
  const classes = pokemonDetailStyles();

  return (
    <Grid container>
      <Grid className={classes.container} item xs={12} sm={6}>
        <Grid className={classes.attributeContainer}>
          <Grid className={classes.attribute}>
            <Typography variant="h4" color="primary" noWrap>
              Name:{" "}
            </Typography>
            <Typography
              className={classes.attributeData}
              variant="h5"
              color="secondary "
              noWrap
            >
              {" "}
              {pokemon.name}{" "}
            </Typography>
          </Grid>

          <Grid className={classes.attribute}>
            <Typography variant="h4" color="primary" noWrap>
              Height:{" "}
            </Typography>
            <Typography
              className={classes.attributeData}
              variant="h5"
              color="secondary "
              noWrap
            >
              {pokemon.height}
            </Typography>
          </Grid>
          <Grid className={classes.attribute}>
            <Typography variant="h4" color="primary" noWraps>
              Types:{" "}
            </Typography>
            {pokemon &&
              pokemon.types.map(item => {
                return (
                  <Grid className={classes.attributeData}>
                    {" "}
                    <Typography
                      className={classes.attributeData}
                      variant="h5"
                      color="secondary "
                      noWrap
                    >
                      {item.type.name}{" "}
                    </Typography>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid className={classes.imageContainer}>
          <img src={`${pokemon.sprites.other.dream_world.front_default}`} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stats pokemon={pokemon} />
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;


