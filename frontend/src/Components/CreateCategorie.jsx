import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategorie } from '../actions';

export default function CreateCategorie() {
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategorie({ nom }));
        setNom("");
        navigate('/categorie');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <h2 className="text-base/7 font-semibold text-gray-900 mt-6 mb-6">Créer une nouvelle catégorie</h2>
            <div class="mb-5">
                <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le nom de la catégorie</label>
                <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required name="nom" placeholder="Nom de la catégorie" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Valider</button>
        </form>

    )
}

