import React from "react";
import Filters from "../Filters";
import PanelList from "../PanelList";
import "./Panel.style.scss";

const Panel = (props) => {
  return (
    <section className="panel__list__container">
      <section className="panel__list__header">
        {props.img && <img src={props.img} alt="pokemon list" />}
        {props.label && <h3>{props.label}</h3>}
        <Filters
          handlerSearch={props.handlerSearch}
          handlerClear={props.handlerClear}
        />
      </section>
      <PanelList list={props.data} handlerFavorites={props.handlerFavorites} />
    </section>
  );
};

export default Panel;
