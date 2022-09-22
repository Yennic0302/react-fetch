import React, { useState, useEffect } from "react";
import SelectsList from "./SelectsList/SelectsList";

function SelectsAnidados() {
  const [state, setState] = useState("");
  const [town, setTwon] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Selects anidados</h2>
      <h3>Mexico</h3>
      <SelectsList
        title="state"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectsList
          title="twon"
          url=""
          handleChange={(e) => {
            setTwon(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectsList
          title="suburb"
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} -{suburb}
        </code>
      </pre>
    </div>
  );
}

export default SelectsAnidados;
