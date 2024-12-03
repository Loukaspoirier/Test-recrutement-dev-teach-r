import React from "react";

export default function DeleteProduit({ id }) {
  function confirmDelete() {
    fetch(`/produit/delete/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          alert("Produit supprimé avec succès");
        } else {
          alert("Erreur lors de la suppression");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  };

  return (
    <button onClick={confirmDelete} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
  );
};

