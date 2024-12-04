import * as React from "react";
import NavBar from "../Components/General/Navbar";
import CreateProduit from "../Components/Produit/CreateProduit";

// Page pour afficher le formulaire de création de produit
export default function CreateProduitPage() {
    return (
        <div>
            <NavBar />
            <CreateProduit />
        </div>
    )
}