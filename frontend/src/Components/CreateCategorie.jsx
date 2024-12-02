import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateCategorie() {
    const [nom, setNom] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/categorie/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nom }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la création de la catégorie.');
                }
                return response.text();
            })
            .then((data) => {
                setMessage(data);
                setNom('');
                navigate("/");
            })
            .catch((error) => {
                setMessage(error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Créer une nouvelle catégorie</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="nom" className="block text-sm/6 font-medium text-gray-900">
                                Nom de la catégorie
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="text"
                                        id="nom"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        required
                                        name="nom"
                                        placeholder="Nom de la catégorie"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Valider
                </button>
            </div>
        </form>

    )
}

