import React, { useEffect, useState } from "react";
import DeleteProduit from "./DeleteProduit";
import { Link } from "react-router-dom";

export default function ReadAllProduit() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        fetch("/produit")
            .then((response) => response.json())
            .then((data) => setProduits(data))
            .catch((error) => console.error("Erreur :", error));
    }, [])

    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        <div>
                            {produit.categorie}
                            {produit.nom}
                            {produit.description}
                            {produit.prix}
                            {produit.date}
                            <Link to={`/update/produit/${produit.id}`}>Modifier</Link>
                            <DeleteProduit id={produit.id} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
