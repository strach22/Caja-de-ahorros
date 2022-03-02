import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { AddLista } from "./components/AddLista";

function Cover() {
  const [lista, setLista] = useState("");
  return (
    <>
      <h2>Primera Aplicación de Prueba en el Sign-UP</h2>
      <AddCategory setLista={setLista} />
      <hr />

      <ol>
        {lista.map((auxLista) => (
          <AddLista key={auxLista} auxLista={auxLista} />
        ))}
      </ol>
    </>
  );
}

export default Cover;
