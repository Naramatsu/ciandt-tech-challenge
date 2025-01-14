import React from "react";
import { AppContext } from "../../context";
import { cardColor } from "../../utils/elementColors";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./CardPreview.style.scss";

const CardPreview = ({
  name,
  img,
  type,
  weight,
  height,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  const { removePokemonToFight } = useContext(AppContext);
  const cardColorStyles = cardColor(type);
  const imgNotAvailable = "img_not_available.png";

  return (
    <section style={cardColorStyles} className="pokemon__card">
      <DeleteIcon
        className="remove__card"
        onClick={() => removePokemonToFight(name)}
      />
      <section className="pokemon__card__header">
        <div className="pokemon__card__header__name">
          <h3>{name}</h3>
          <label>{type}</label>
        </div>
        <section className="pokemon__card__header__hp">
          <label>HP</label>
          <h3>{hp}</h3>
        </section>
      </section>
      <section className="pokemon__card__image container">
        <img src={img || imgNotAvailable} alt="pokemon_preview" />
      </section>
      <section className="pokemon__card__info container">
        <h4>Information</h4>
        <section className="pokemon__card__data">
          <p>
            <b>Weight:</b> {weight}Lbs
          </p>
          <p>
            <b>Height:</b> {height}In
          </p>
        </section>
        <section className="pokemon__card__data">
          <p>
            <b>Attack: </b> {attack}
          </p>
          <p>
            <b>Defense: </b> {defense}
          </p>
        </section>
        <section className="pokemon__card__data">
          <p>
            <b>Special attack: </b> {specialAttack}
          </p>
          <p>
            <b>Speed: </b> {speed}
          </p>
        </section>
        <section className="pokemon__card__data">
          <p>
            <b>Special defense: </b> {specialDefense}
          </p>
          <Link to={`/overview/${name}`}>View Info</Link>
        </section>
      </section>
      <p className="copyright">Pokemon/Nintendo</p>
    </section>
  );
};

export default CardPreview;
