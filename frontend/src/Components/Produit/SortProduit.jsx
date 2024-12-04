import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../actions";

// Composant pour trier les produits
export default function SortProduit() {
    const dispatch = useDispatch();
    const { sort } = useSelector((state) => state.produits);

    // Change le filtre quand on le sélectionne
    const handleSortChange = (e) => {
        const [field, direction] = e.target.value.split("-");
        dispatch(setSort(field, direction));
    };

    // Sélecteur pour trier les produits
    return (
        <div className="text-center">
            <select id="sort" onChange={handleSortChange} value={`${sort.field}-${sort.direction}`} className="BgButton text-white text-xl rounded-full p-2">
                <option value="">Trier par</option>
                <option value="prix-asc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Prix croissant</option>
                <option value="prix-desc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Prix décroissant</option>
                <option value="categorie-asc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Catégorie (A-Z)</option>
                <option value="categorie-desc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Catégorie (Z-A)</option>
            </select>
        </div>
    );
}
