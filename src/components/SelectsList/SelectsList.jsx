import React, { useState, useEffect } from "react";
import { useFecth } from "../../hooks/useFetch";

function SelectsList({ title, url, handleChange }) {
  const { data, error, loading } = useFecth(url);

  if (!data) return null;

  let id = `select-${title}`;

  return (
    <div>
      <label htmlFor={id}></label>
      <select name={id} id={id}>
        <option value="">- - -</option>
      </select>
    </div>
  );
}

export default SelectsList;
