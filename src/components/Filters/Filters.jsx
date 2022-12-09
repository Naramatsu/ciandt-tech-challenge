import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Filters.style.scss";

const Filters = ({ handlerSearch, handlerClear }) => {
  const [textField, setTextField] = useState("");

  const clear = () => {
    setTextField("");
    handlerClear();
  };

  const search = () => {
    handlerSearch(textField);
  };

  return (
    <section className="filters__container">
      <div className="input__text">
        <TextField
          id="outlined-basic"
          label="Search by name"
          variant="outlined"
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
        />
        <Button variant="contained" onClick={search}>
          Search
        </Button>
        <Button variant="outlined" onClick={clear}>
          Clear
        </Button>
      </div>
    </section>
  );
};

export default Filters;
