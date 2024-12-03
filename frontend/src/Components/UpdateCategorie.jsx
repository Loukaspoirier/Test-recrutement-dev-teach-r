import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateCategorieById } from "../actions";

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
    <div>
      <h1>Modifier la catégorie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la catégorie :
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}
