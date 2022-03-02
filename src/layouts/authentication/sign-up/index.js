import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { AddGif } from "./components/AddGif";
import "./indexSingUp.css";

function Cover() {
  const [categories, setCategories] = useState(["Marvel", "DC", "Anime"]);
  return (
    <>
      <h2>LISTADO DE GIFS</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <AddGif key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default Cover;
