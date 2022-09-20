import React from "react";
import CrudTableRow from "./CrudTableRow";

function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h3>tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((e) => (
              <CrudTableRow
                key={e.id}
                data={e}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
