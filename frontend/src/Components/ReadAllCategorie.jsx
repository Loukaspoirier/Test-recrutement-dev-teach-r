import React, { useEffect, useState } from "react";
import DeleteCategorie from "./DeleteCategorie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../actions";

export default function ReadAllCategorie() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Liste des catégories</h1>
      <div>
        {categories.map((categorie) => (
          <div key={categorie.id} class="max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{categorie.nom}</h5>
            <Link to={`/categorie/update/${categorie.id}`} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Modifier</Link>
            <DeleteCategorie id={categorie.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
