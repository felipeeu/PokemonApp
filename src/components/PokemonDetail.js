import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const PokemonDetail = ({ pokemon }) => {
  return (
    <Grid>
      <Grid>
        <Typography>Nome: </Typography>
        {pokemon.name}
      </Grid>
      <Grid>
        <img src={`${pokemon.sprites.other.dream_world.front_default}`} />
      </Grid>
      <Grid>
        <Typography>Altura: </Typography>
        {pokemon.height}{" "}
      </Grid>
      <Grid>
        <Typography>Tipos: </Typography>
        {pokemon && pokemon.map(type => <span>{type}</span>)}{" "}
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
