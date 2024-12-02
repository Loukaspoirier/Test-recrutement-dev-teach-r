import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateCategorie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nom, setNom] = useState("");

  useEffect(() => {
    fetch(`/categorie/read/${id}`)
      .then((response) => response.json())
      .then((data) => setNom(data.nom))
      .catch((error) => console.error("Erreur :", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/categorie/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Catégorie mise à jour avec succès");
          navigate("/");
        } else {
          alert("Erreur lors de la mise à jour");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  };

  return (
    <div>
      <h1>Modifier la catégorie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nouveau nom :
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

