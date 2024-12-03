import React, { useEffect, useState } from "react";
import DeleteCategorie from "./DeleteCategorie";
import { Link } from "react-router-dom";

export default function ReadAllCategorie(){
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categorie")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Erreur :", error));
  }, [])

  return (
    <div>
      <h1>Liste des catégories</h1>
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.id}>
              <div>
                {categorie.nom}
                <Link to={`/update/categorie/${categorie.id}`}>Modifier</Link>
                <DeleteCategorie id={categorie.id} />
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
