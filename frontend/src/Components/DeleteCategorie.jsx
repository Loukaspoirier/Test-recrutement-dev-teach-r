import React from "react";

export default function DeleteCategorie({ id }) {
  function confirmDelete() {
    fetch(`/categorie/delete/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          alert("Catégorie supprimée avec succès");
        } else {
          alert("Erreur lors de la suppression");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  };

  return (
    <button onClick={confirmDelete}>Supprimer</button>
  );
};

