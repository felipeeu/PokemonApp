import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const RESET_STORE = "RESET_STORE";

export const getPokemons = (offset, limit) => {
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(
        response =>
          response &&
          response.data.results.map(item =>
            axios.get(item.url).then(payload => {
              dispatch({
                type: GET_POKEMONS,
                payload: payload.data
              });
            })
          )
      );
  };
};

export const getPokemonById = id => {
  return dispatch => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(payload => {
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: payload.data
      });
    });
  };
};

export const resetStore = () =>{
  return dispatch=>{
    dispatch({
      type:RESET_STORE
    })
  }
}