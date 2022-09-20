import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm/CrudForm";
import CrudTable from "./CrudTable/Crudtable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader/Loader";
import ClientMessage from "./ClientMessage/ClientMessage";

function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setErr(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((e) => (e.id === data.id ? data : e));
        setDb(newData);
      } else {
        setErr(res);
      }
    });
  };
  const deleteData = (id) => {
    if (window.confirm("seguro de eliminar este elmento?")) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((e) => e.id !== id);
          setDb(newData);
        }
      });

      // let newData = db.filter((e) => e.id !== id);
    }
  };

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setErr(false);
      } else {
        setErr(res);
        setDb(null);
      }
      setLoading(false);
    });
  }, [url]);
  return (
    <div>
      <h2>CRUD Api</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {err && (
          <ClientMessage
            msg={`error ${err.status}: ${err.statusText}`}
            bgColor={"#dc3545"}
          />
        )}
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
}

export default CrudApi;
