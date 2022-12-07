import {
  ADD_FAVORITE,
  FIND_POKEMON_BY_NAME,
  GET_POKEMONS,
  GET_POKEMONS_TYPES,
  REMOVE_FAVORITE,
  SELECT_POKEMON,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...payload],
      };
    case GET_POKEMONS_TYPES:
      return {
        ...state,
        pokemonsTypesList: payload,
      };
    case FIND_POKEMON_BY_NAME: {
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) =>
          pokemon.name.includes(payload)
        ),
      };
    }
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
        favorites: state.favorites.filter((pokemon) => pokemon.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
