import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduit } from "../../actions";
import ValidateButton from "../General/ValidateButton";

export default function CreateProduit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [prix, setPrix] = useState("");
    const [date, setDate] = useState("");
    const [categorieId, setCategorieId] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categorie")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erreur lors du chargement des catégories :", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProduit({ nom, description, prix: parseFloat(prix), date, categorieId: parseInt(categorieId) }));
        navigate("/produit");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <h2 className="text-base/7 font-semibold text-gray-900 mt-6 mb-6">Créer une nouvelle catégorie</h2>
            <div className="mb-5">
                <label for="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du produit</label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                    value={categorieId}
                    onChange={(e) => setCategorieId(e.target.value)}
                    required
                    name="categorie"
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
