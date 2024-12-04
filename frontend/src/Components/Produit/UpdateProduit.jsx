import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduitById, fetchCategories } from "../../actions";
import ValidateButton from "../General/ValidateButton";

// composant pour modifier un produit
export default function UpdateProduit() {
  const { id } = useParams();

  // pour se rediriger
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading: loadingCategories, error: errorCategories } = useSelector((state) => state.categories);
  const { produits, loading: loadingProduits, error: errorProduits } = useSelector((state) => state.produits);

  // On initialise un tableau pour stocker les attributs
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    prix: "",
    date: "",
    categorieId: "",
  });

  // On charge les catégories pour le sélecteur
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }

    // On affiche les données correspondant à l'id
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

  // Redirection une fois les données envoyées
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduitById(id, formData));
    alert("Produit mis à jour !");
    navigate("/produit");
  };

  // message pour attendre la fin du chargement
  if (loadingCategories || loadingProduits) return <p>Chargement...</p>;
  if (errorCategories || errorProduits) return <p>Erreur : {errorCategories || errorProduits}</p>;

  // Formulaire pour modifier un produit
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <h2 className="text-base/7 font-semibold text-gray-900 mt-6 mb-6">Modifier le produit</h2>
      <div className="mb-5">
        <label for="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du produit</label>
        <input
          type="text"
          id="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          name="nom"
          placeholder="Nom du produit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description du produit
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
          name="description"
          placeholder="Description du produit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label for="prix" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Prix du produit
        </label>
        <input
          type="number"
          id="prix"
          value={formData.prix}
          onChange={handleChange}
          required
          name="prix"
          placeholder="Prix du produit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Date de publication
        </label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
          name="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label for="catégorie" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Catégorie
        </label>
        <select
          id="categorie"
          value={formData.categorieId}
          onChange={handleChange}
          required
          name="categorieId"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                  >
          <option value="">Sélectionner une catégorie</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.nom}
            </option>
          ))}
        </select>
      </div>
      <ValidateButton />
    </form>
  );
}
