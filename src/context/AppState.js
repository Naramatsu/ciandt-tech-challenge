import React, { useReducer } from "react";
import AppReducer from "./reducer";
import { AppContext } from ".";
import { getAllPokemons as getAllPokemonsAPI } from "../api";
import { ADD_FAVORITE, GET_POKEMONS } from "./types";
import {
  getItemInLocalStorage,
  removeDuplicateItems,
  saveItemInLocalStorage,
} from "../utils";

const AppState = (props) => {
  const initialState = {
    pokemons: [],
    pokemonsTypesList: [],
    pokemon: null,
  };

  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const getAllPokemons = async (offset = 0, limit = 10) => {
    const { results } = await getAllPokemonsAPI(offset, limit);
    dispatch({
      type: GET_POKEMONS,
      payload: results,
    });

    const pokemonsInLocalStorage = [
      ...(getItemInLocalStorage("pokemons") || []),
      results,
    ];

    const result = removeDuplicateItems(pokemonsInLocalStorage);
    saveItemInLocalStorage("pokemons", result);
  };

  const addFavorite = (pokemon) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: pokemon,
    });

    const favorites = getItemInLocalStorage("favorites");
    saveItemInLocalStorage("favorites", [...favorites, pokemon]);
  };

  const combinedFuntions = {
    getAllPokemons,
    addFavorite,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combinedFuntions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
