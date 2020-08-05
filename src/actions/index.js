import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const RESET_STORE = "RESET_STORE";
export const GET_FAVORITES = "GET_FAVORITES ";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";
export const SELECT_POKEMON = "SELECT_POKEMON";

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

export const getPokemonByName = name => {
  return dispatch => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(payload => {
      dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: payload.data
      });
    });
  };
};

export const resetStore = () => {
  return dispatch => {
    dispatch({
      type: RESET_STORE
    });
  };
};

export const getFavorites = () => {
  return dispatch => {
    dispatch({
      type: GET_FAVORITES
    });
  };
};

export const addToFavorites = pokemon => {
  return dispatch => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: pokemon
    });
  };
};

export const deleteFromFavorites = pokemonId => {
  return dispatch => {
    dispatch({
      type: DELETE_FROM_FAVORITES,
      payload: pokemonId
    });
  };
};

export const selectPokemon = pokemonId => {
  return dispatch => {
    dispatch({
      type: SELECT_POKEMON,
      payload: pokemonId
    });
  };
};
