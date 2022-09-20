import React, { useEffect, useState } from "react";

function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {
  const initialForm = {
    id: null,
    name: "",
    constellation: "",
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
    if (!form.name || !form.constellation) {
      alert("datos imcopletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  useEffect(() => {
    if (dataToEdit !== null) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  return (
    <div>
      <h3>{dataToEdit ? "Actualizar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          value={form.constellation}
          type="text"
          name="constellation"
          placeholder="Constelacion"
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
}

export default CrudForm;
