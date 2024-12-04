import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategorie } from '../../actions';
import ValidateButton from '../General/ValidateButton';

// Composant pour créer une catégorie
export default function CreateCategorie() {
    // Initialise useNavigate pour se rediriger après la création
    const navigate = useNavigate();

    // On stocke le nom dans un useState
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();

    // lorsque qu'on valide envoie les données et redirige
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategorie({ nom }));
        setNom("");
        navigate('/categorie');
    };

    return (
        // Formulaire de création de catégorie
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <h2 className="text-base/7 font-semibold text-gray-900 mt-6 mb-6">Créer une nouvelle catégorie</h2>
            <div className="mb-5">
                <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le nom de la catégorie</label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    name="nom"
                    placeholder="Nom de la catégorie"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <ValidateButton />
        </form>

    )
}

