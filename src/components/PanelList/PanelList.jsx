import React, { useContext } from "react";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import GroupAdd from "@mui/icons-material/GroupAdd";
import { AppContext } from "../../context";
import "./PanelList.style.scss";

const PanelList = ({ list, handlerFavorites = () => {} }) => {
  const { favorites, addPokemonToFight, fight } = useContext(AppContext);

  const isFavorite = (item) => {
    return favorites.find((favorite) => favorite.name === item.name)
      ? "error"
      : "";
  };

  const handlerAddPokemonToFight = (pokemon) => {
    if (!fight.some((item) => item.name === pokemon.name)) {
      addPokemonToFight(pokemon);
    }
  };

  return (
    <>
      {list.length ? (
        <ul className="container">
          {list.map((pokemon, index) => (
            <li key={index}>
              {pokemon.name}
              <section className="icons__group">
                <Favorite
                  color={isFavorite(pokemon)}
                  onClick={() => handlerFavorites(pokemon)}
                />
                <Visibility color="primary" />
                <GroupAdd
                  color="secondary"
                  onClick={() => handlerAddPokemonToFight(pokemon)}
                />
              </section>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No items found!</h3>
      )}
    </>
  );
};

export default PanelList;
