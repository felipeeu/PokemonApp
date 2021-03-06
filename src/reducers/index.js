import { combineReducers } from "redux";

import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  RESET_STORE,
  GET_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  SELECT_POKEMON
} from "../actions/index";

const initialState = {
  tenPokemons: [],
  favorites: [],
  pokemonByName: {},
  pokemonSelected: {}
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        tenPokemons: !state.tenPokemons
          ? [action.payload]
          : state.tenPokemons.concat([action.payload])
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: action.payload
      };

    case GET_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites
      };
    }

    case ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: !state.favorites
          ? [action.payload]
          : state.favorites
              .filter(pokemon => pokemon.id !== action.payload.id)
              .concat(action.payload)
      };
    }

    case DELETE_FROM_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.filter(
          favorite => favorite.id !== action.payload
        )
      };
    }

    case SELECT_POKEMON: {
      return {
        ...state,
        pokemonSelected:
          state.tenPokemons &&
          state.tenPokemons.find(pokemon => pokemon.id === action.payload)
      };
    }

    case RESET_STORE: {
      return {
        ...state,
        tenPokemons: []
      };
    }

    default:
      return state;
  }
};

const Reducers = combineReducers({
  pokemons
});
export default Reducers;
