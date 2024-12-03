import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProduit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [prix, setPrix] = useState("");
    const [date, setDate] = useState("");
    const [categorieId, setCategorieId] = useState("");
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('/categorie')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Erreur lors du chargement des catégories :', error));
    }, []);

    useEffect(() => {
        fetch(`/produit/read/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setNom(data.nom);
                setDescription(data.description);
                setPrix(data.prix);
                setDate(data.date);
                setCategorieId(data.categorieId);
            })
            .catch((error) => console.error("Erreur :", error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/produit/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nom,
                description,
                prix: parseFloat(prix),
                date,
                categorieId: parseInt(categorieId, 10),
            }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Produit mis à jour avec succès");
                    navigate("/");
                } else {
                    alert("Erreur lors de la mise à jour du produit");
                }
            })
            .catch((error) => console.error("Erreur :", error));
    };

    return (
        <div>
            <h1>Modifier le produit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nom :
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description :
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Prix :
                        <input
                            type="number"
                            step="0.01"
                            value={prix}
                            onChange={(e) => setPrix(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Date :
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        ID de la catégorie :
                        <select
                            id="categorie"
                            value={categorieId}
                            onChange={(e) => setCategorieId(e.target.value)}
                            required>
                            <option value="">Sélectionner une catégorie</option>
                            {categories.map((categorie) => (
                                <option key={categorie.id} value={categorie.id}>
                                    {categorie.nom}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <button type="submit">Valider</button>
            </form>
        </div>
    );
}
