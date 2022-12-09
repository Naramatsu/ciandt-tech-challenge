import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import FightSection from "../FightSection";
import Filters from "../Filters";
import PanelList from "../PanelList";
import PokemonsTable from "../PokemonsTable/PokemonsTable";
import Toast from "../Toast";
import "./Main.style.scss";

const Main = () => {
  const [favoritesList, setFavoritesList] = useState([]);
  const [showStats, setShowStats] = useState(false);
  const {
    pokemons,
    getAllPokemons,
    favorites,
    addFavorite,
    removeFavorite,
    getPolkemonByName,
    fight,
    error,
  } = useContext(AppContext);

  useEffect(() => {
    if (!pokemons.length) {
      getAllPokemons();
    }
  }, [pokemons, getAllPokemons]);

  useEffect(() => {
    setFavoritesList(favorites);
  }, [favorites]);

  const handlerFavorites = (item) => {
    if (favorites.some((favorite) => favorite.name === item.name)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  const handlerSearchPokemons = (name) => {
    if (name === "") {
      getAllPokemons();
    } else {
      getPolkemonByName(name);
    }
  };

  const handlerSearchFavorites = (name) => {
    if (name !== "") {
      setFavoritesList(
        favorites.filter((favorite) => favorite.name.includes(name))
      );
    } else {
      setFavoritesList(favorites);
    }
  };

  const showBtnStats = fight.length >= 2 && !showStats;

  return (
    <section className="pokedex container">
      <img src="pokedex.png" alt="logo" />
      <section className="pokemons__grid">
        <section className="panel__list__container">
          <section className="panel__list__header">
            <img src="pokemon.png" alt="pokemon list" />
            <Filters
              handlerSearch={handlerSearchPokemons}
              handlerClear={() => getAllPokemons()}
            />
          </section>
          <PanelList list={pokemons} handlerFavorites={handlerFavorites} />
        </section>
        <section className="panel__list__container">
          <section className="panel__list__header">
            <h3>Favorites</h3>
            <Filters
              handlerSearch={handlerSearchFavorites}
              handlerClear={() => setFavoritesList(favorites)}
            />
          </section>
          <PanelList list={favoritesList} handlerFavorites={handlerFavorites} />
        </section>
      </section>
      <h3>Fight section</h3>
      <section className="section__fight">
        {fight.length ? (
          <FightSection />
        ) : (
          <img className="card__back" src="back_card.jpg" alt="back card" />
        )}
      </section>
      {showBtnStats && (
        <Button variant="contained" onClick={() => setShowStats(true)}>
          View stats
        </Button>
      )}
      {showStats && <PokemonsTable onHide={() => setShowStats(false)} />}
      <Toast visible={!!error} message={error} />
    </section>
  );
};

export default Main;
