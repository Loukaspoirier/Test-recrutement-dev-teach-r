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
    <button onClick={confirmDelete}>Supprimer</button>
  );
};

