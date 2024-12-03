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
            <div class="block m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nom du produit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Catégorie du produit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Description du produit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Prix du produit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date de publication du produit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {produits.map((produit) => (
                                <tr key={produit.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {produit.nom}
                                    </th>
                                    <td class="px-6 py-4">
                                        {produit.categorie}
                                    </td>
                                    <td class="px-6 py-4">
                                        {produit.description}

                                    </td>
                                    <td class="px-6 py-4">
                                        {produit.prix} €

                                    </td>
                                    <td class="px-6 py-4">
                                        {produit.date}

                                    </td>
                                    <td class="px-6 py-4 m-2">
                                        <Link to={'/update/produit/${produit.id}'} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</Link>
                                        <br />
                                        <DeleteProduit id={produit.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
