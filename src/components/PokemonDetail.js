import React from "react"
import Grid from "@material-ui/core/Grid"


const PokemonDetail =({pokemon}) => {
  return(
    <Grid>
    {pokemon.name}
    </Grid>
  )
}

export default PokemonDetail

//     - Nome -> pokemon.name
//     - Imagem -> pokemon.sprites.other.dream_world.front_default
//     - Altura -> pokemon.height
//     - Lista de Tipos ->  pokemon.types (array)
//     - Velocidade ->
//     - Defesa -> 
//     - Ataque -> 
//     - HP ->
//     - Passos da Evolução ->