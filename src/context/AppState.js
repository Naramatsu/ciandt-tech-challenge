import React, { useReducer } from "react";
import AppReducer from "./reducer";
import { AppContext } from ".";
import { findByName, getAllPokemons as getAllPokemonsAPI } from "../api";
import {
  ADD_FAVORITE,
  ADD_FIGHT_LIST,
  FIND_POKEMON_BY_NAME,
  GET_POKEMONS,
  REMOVE_FAVORITE,
  REQUEST_WITH_ERROR,
} from "./types";

const AppState = (props) => {
  const initialState = {
    pokemons: [],
    pokemonsTypesList: [],
    pokemon: null,
    favorites: [],
    fight: [],
    error: null,
  };

  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const getAllPokemons = async (offset = 0, limit = 100) => {
    try {
      const { results } = await getAllPokemonsAPI(offset, limit);

      dispatch({
        type: GET_POKEMONS,
        payload: results,
      });

      dispatch({
        type: REQUEST_WITH_ERROR,
        payload: null,
      });
    } catch (error) {
      dispatch({
        type: REQUEST_WITH_ERROR,
        payload: "Error trying to retrive all pokemons",
      });
    }
  };

  const getPolkemonByName = async (name) => {
    try {
      const payload = await findByName(name);
      dispatch({
        type: FIND_POKEMON_BY_NAME,
        payload: [payload],
      });
      dispatch({
        type: REQUEST_WITH_ERROR,
        payload: null,
      });
    } catch (error) {
      let message = `Error trying to find the pokemon ${name}`;
      if (error.response.status === 404)
        message = "This pokemon does not exist!";
      dispatch({
        type: REQUEST_WITH_ERROR,
        payload: message,
      });
    }
  };

  const addFavorite = (pokemon) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: pokemon,
    });
  };

  const removeFavorite = (favorite) => {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: favorite,
    });
  };

  const addPokemonToFight = async (pokemon) => {
    const payload = await findByName(pokemon.name);
    dispatch({
      type: ADD_FIGHT_LIST,
      payload,
    });
  };

  const combinedFuntions = {
    getAllPokemons,
    addFavorite,
    getPolkemonByName,
    removeFavorite,
    addPokemonToFight,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combinedFuntions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
