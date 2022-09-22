import React, { useState, useEffect } from "react";

function SongSearchForm({ handleSearch }) {
  let initialForm = {
    artistName: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artistName) {
      alert("datos imcompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artista"
          onChange={handleChange}
          name="artistName"
          value={form.artistName}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default SongSearchForm;
