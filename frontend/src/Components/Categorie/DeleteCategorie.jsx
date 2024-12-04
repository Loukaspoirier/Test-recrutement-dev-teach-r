import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategorieById } from "../../actions";

export default function DeleteCategorie({ id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
            dispatch(deleteCategorieById(id));
            alert("Catégorie supprimée !");
        }
    };

    return <button onClick={handleDelete} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>;
}
