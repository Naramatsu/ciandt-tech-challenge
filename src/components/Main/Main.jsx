import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { Button } from "@mui/material";
import FightSection from "../FightSection";
import Panel from "../Panel";
import PokemonsTable from "../PokemonsTable/PokemonsTable";
import Stats from "../Stats";
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
      <section className="pokemons__grid">
        <Panel
          handlerSearch={handlerSearchPokemons}
          handlerClear={getAllPokemons}
          handlerFavorites={handlerFavorites}
          data={pokemons}
          img="pokemon.png"
        />
        <Panel
          handlerSearch={handlerSearchFavorites}
          handlerClear={() => setFavoritesList(favorites)}
          handlerFavorites={handlerFavorites}
          data={favoritesList}
          label="Favorites"
        />
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
        <>
          <Button variant="contained" onClick={() => setShowStats(true)}>
            View stats
          </Button>
          <br />
          <br />
          <br />
        </>
      )}
      {showStats && (
        <>
          <PokemonsTable onHide={() => setShowStats(false)} />
          <Stats
            data={fight.map((item) => ({
              pokemon: item.name,
              attack: item.stats[1].base_stat,
              defense: item.stats[2].base_stat,
              specialAttack: item.stats[3].base_stat,
              specialDefense: item.stats[4].base_stat,
            }))}
          />
        </>
      )}
      <Toast visible={!!error} message={error} />
    </section>
  );
};

export default Main;
