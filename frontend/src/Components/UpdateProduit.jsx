import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduitById, fetchCategories } from "../actions";

export default function UpdateProduit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading: loadingCategories, error: errorCategories } = useSelector((state) => state.categories);
  const { produits, loading: loadingProduits, error: errorProduits } = useSelector((state) => state.produits);

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    prix: "",
    date: "",
    categorieId: "",
  });

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }

    const produit = produits.find((p) => p.id === parseInt(id));
    if (produit) {
      setFormData({
        nom: produit.nom,
        description: produit.description,
        prix: produit.prix,
        date: produit.date,
        categorieId: produit.categorieId || "",
      });
    }
  }, [dispatch, id, categories, produits]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduitById(id, formData));
    alert("Produit mis à jour !");
    navigate("/produit");
  };

  if (loadingCategories || loadingProduits) return <p>Chargement...</p>;
  if (errorCategories || errorProduits) return <p>Erreur : {errorCategories || errorProduits}</p>;

  return (
    <div>
      <h1>Modifier le produit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du produit :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Prix :</label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date :</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Catégorie :</label>
          <select
            name="categorieId"
            value={formData.categorieId}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.nom}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}
