import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateCategorieById } from "../../actions";
import ValidateButton from "../General/ValidateButton";

export default function UpdateCategorie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    nom: "",
  });

  useEffect(() => {
    const categorie = categories.find((c) => c.id === parseInt(id));
    if (categorie) {
      setFormData({ nom: categorie.nom });
    }
  }, [categories, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategorieById(id, formData));
    alert("Catégorie mise à jour !");
    navigate("/categorie");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <h2 className="text-base/7 font-semibold text-gray-900 mt-6 mb-6">Modifier la catégorie</h2>
      <div class="mb-5">
        <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le nom de la catégorie</label>
        <input
          type="text"
          id="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          name="nom"
          placeholder="Nom de la catégorie"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <ValidateButton />
    </form>
  );
}
