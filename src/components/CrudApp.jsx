import React, { useState } from "react";
import CrudForm from "./CrudForm/CrudForm";
import CrudTable from "./CrudTable/Crudtable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Seiya",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = new Date().now;
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((e) => (e.id === data.id ? data : e));
    setDb(newData);
  };
  const deleteData = (id) => {
    if (window.confirm("seguro de eliminar este elmento?")) {
      let newData = db.filter((e) => e.id !== id);
      setDb(newData);
    }
  };
  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
}

export default CrudApp;
