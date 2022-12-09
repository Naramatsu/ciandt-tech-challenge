import {
  ADD_FAVORITE,
  ADD_TO_FIGHT_LIST,
  FIND_POKEMON_BY_NAME,
  GET_POKEMONS,
  GET_POKEMONS_TYPES,
  REMOVE_FAVORITE,
  REMOVE_TO_FIGHT_LIST,
  REQUEST_WITH_ERROR,
  SELECT_POKEMON,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POKEMONS:
    case FIND_POKEMON_BY_NAME:
      return {
        ...state,
        pokemons: payload,
      };
    case GET_POKEMONS_TYPES:
      return {
        ...state,
        pokemonsTypesList: payload,
      };
    case ADD_TO_FIGHT_LIST:
      return {
        ...state,
        fight: [...state.fight, payload],
      };
    case REMOVE_TO_FIGHT_LIST:
      return {
        ...state,
        fight: state.fight.filter((item) => item.name !== payload),
      };
    case SELECT_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [payload.id]: payload,
        },
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (pokemon) => pokemon.name !== payload.name
        ),
      };
    case REQUEST_WITH_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
