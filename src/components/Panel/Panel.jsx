import React from "react";
import { Skeleton } from "@mui/material";
import Filters from "../Filters";
import PanelList from "../PanelList";

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
      {props.isFetching ? (
        <>
          <Skeleton
            className="container"
            variant="rectangular"
            width="90%"
            height={50}
          />
          <br />
          <Skeleton
            className="container"
            variant="rectangular"
            width="90%"
            height={50}
          />
          <br />
          <Skeleton
            className="container"
            variant="rectangular"
            width="90%"
            height={50}
          />
        </>
      ) : (
        <PanelList
          list={props.data}
          handlerFavorites={props.handlerFavorites}
        />
      )}
    </section>
  );
};

export default Panel;
