import { combineReducers } from "redux";

import { GET_POKEMONS, GET_POKEMON_BY_ID, RESET_STORE , GET_FAVORITES ,ADD_TO_FAVORITES , DELETE_FROM_FAVORITES } from "../actions/index";

const initialState = {
  tenPokemons: [],
  favorites: []
 
};

const pokemons = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        tenPokemons: state.tenPokemons.concat([action.payload])
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemon: action.payload
      };

      case GET_FAVORITES: {
        return {
          ...state,
          favorites:state.favorites
        }
      }

      case ADD_TO_FAVORITES: {
        return {
          ...state,
          favorites:state.favorites.concat([action.payload])
        }
      }
      case DELETE_FROM_FAVORITES: {
        return {
          ...state,
          favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
        }
      }

      case RESET_STORE: {
        return {
          ...state,
          tenPokemons: []
        }
      }



    default:
      return state;
  }
};

const Reducers = combineReducers({
  pokemons
});
export default Reducers;
