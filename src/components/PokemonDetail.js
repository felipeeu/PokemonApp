import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Stats from "./Stats";

const PokemonDetail = ({ pokemon }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Grid>
          <Typography variant="subtitle1" color="primary" noWrap>
            Name: {" "} {pokemon.name}
          </Typography>
          
        </Grid>

        <Grid >
          <Typography variant="subtitle1" color="primary" noWrap>
            Height: {" "}  {pokemon.height}
          </Typography>
         
        </Grid>
        <Grid>
          <Typography variant="subtitle1" color="primary" noWraps>
            Types:{" "}
          </Typography>
          {pokemon &&
            pokemon.types.map(item => {
              return <Grid>{item.type.name}</Grid>;
            })}
        </Grid>
        <Grid>
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

//     - Nome -> pokemon.name
//     - Imagem -> pokemon.sprites.other.dream_world.front_default
//     - Altura -> pokemon.height
//     - Lista de Tipos ->  pokemon.types (array)
//     - Velocidade ->stats
//     - Defesa -> stats
//     - Ataque -> stats
//     - HP ->stats
//     - Passos da Evolução ->
