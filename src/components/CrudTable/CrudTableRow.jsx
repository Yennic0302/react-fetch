import React from "react";

function CrudTableRow({ data, deleteData, setDataToEdit }) {
  let { name, constellation, id } = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button
          onClick={() => {
            setDataToEdit(data);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            deleteData(id);
          }}
        >
          eliminar
        </button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
