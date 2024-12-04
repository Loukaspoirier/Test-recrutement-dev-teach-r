import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduits } from "../../actions";
import DeleteProduit from "./DeleteProduit";
import { Link } from "react-router-dom";
import SortProduit from "./SortProduit";

export default function ReadAllProduit() {
    const dispatch = useDispatch();
    const { produits, loading, error } = useSelector((state) => state.produits);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProduits = produits.filter((produit) =>
        produit.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchProduits());
    }, [dispatch]);

    if (loading) return <p className="text-center m-6">Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <div className="columns-3">
                <button type="button" class="text-white BgButton rounded-full text-xl mx-6 px-5 py-2.5 text-center">
                    <Link to={"/produit/create"}>Ajouter un Produit</Link>
                </button>
                <form className="max-w-md mx-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher un produit..." required />
                    </div>
                </form>
                <div className="m-6">
                    <SortProduit />
                </div>
            </div>
            <div className="block m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nom du produit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Catégorie du produit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description du produit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prix du produit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date de publication du produit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProduits.length > 0 ? (
                                filteredProduits.map((produit) => (
                                    <tr key={produit.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {produit.nom}
                                        </th>
                                        <td className="px-6 py-4">
                                            {produit.categorie}
                                        </td>
                                        <td className="px-6 py-4">
                                            {produit.description}

                                        </td>
                                        <td className="px-6 py-4">
                                            {produit.prix} €

                                        </td>
                                        <td className="px-6 py-4">
                                            {produit.date}

                                        </td>
                                        <td className="py-4">
                                            <Link to={`/produit/update/${produit.id}`} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-3 dark:focus:ring-yellow-900">Modifier</Link>
                                            <br />
                                            <DeleteProduit id={produit.id} />
                                        </td>
                                    </tr>
                                ))

                            ) : (
                                <p className="text-gray-500">Aucun produit ne correspond à la recherche.</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
