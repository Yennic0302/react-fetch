import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
