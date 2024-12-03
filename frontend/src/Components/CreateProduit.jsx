import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateProduit() {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [date, setDate] = useState('');
    const [categorieId, setCategorieId] = useState('');
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/categorie')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Erreur lors du chargement des catégories :', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/produit/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
                description,
                prix: parseFloat(prix),
                date,
                categorieId: parseInt(categorieId, 10),
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la création du produit.');
                }
                return response.text();
            })
            .then(() => {
                setNom('');
                setDescription('');
                setPrix('');
                setDate('');
                setCategorieId('');
                navigate('/');
            })
            .catch((error) => console.error('Erreur :', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Créer un produit</h2>
            <div>
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
            </div>
            <div>
                <label>Description :</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Prix :</label>
                <input type="number" step="0.01" value={prix} onChange={(e) => setPrix(e.target.value)} required />
            </div>
            <div>
                <label>Date :</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>ID de la catégorie :</label>
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
            </div>
            <button type="submit">Créer</button>
        </form>
    );
}
