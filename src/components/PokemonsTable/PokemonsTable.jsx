import React, { useMemo, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@mui/material";
import { useContext } from "react";
import "./PokemonsTable.style.scss";

const PokemonsTable = ({ onHide }) => {
  const { fight } = useContext(AppContext);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { field: "pokemon" },
    { field: "hp" },
    { field: "weight" },
    { field: "height" },
    { field: "attack" },
    { field: "defense" },
    { field: "specialAttack" },
    { field: "specialDefense" },
    { field: "speed" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  useEffect(() => {
    setRowData(
      fight.map((pokemon) => {
        const [hp, attack, defense, specialAttack, specialDefense, speed] =
          pokemon.stats;
        return {
          pokemon: pokemon.name,
          hp: hp.base_stat,
          weight: pokemon.weight,
          height: pokemon.height,
          attack: attack.base_stat,
          defense: defense.base_stat,
          specialAttack: specialAttack.base_stat,
          specialDefense: specialDefense.base_stat,
          speed: speed.base_stat,
        };
      })
    );
  }, [fight]);

  return (
    <section className="pokemons_stats">
      <h3>Stats</h3>
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection={"multiple"}
            defaultColDef={defaultColDef}
            sideBar={"columns"}
          ></AgGridReact>
        </div>
      </div>
      <Button variant="outlined" onClick={onHide}>
        Close
      </Button>
    </section>
  );
};

export default PokemonsTable;
