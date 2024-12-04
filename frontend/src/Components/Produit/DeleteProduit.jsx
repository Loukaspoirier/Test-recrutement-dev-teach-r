import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduitById } from "../../actions";

export default function DeleteProduit({ id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
            dispatch(deleteProduitById(id));
            alert("Produit supprimé !");
        }
    };
  return (
    <button onClick={handleDelete} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
  );
};

