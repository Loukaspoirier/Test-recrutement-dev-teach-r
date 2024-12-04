import * as React from "react";
import NavBar from "../Components/General/Navbar";
import UpdateProduit from "../Components/Produit/UpdateProduit";

// Page pour afficher le formulaire de modification de produit
export default function UpdateProduitPage() {
    return (
        <div>
            <NavBar />
            <UpdateProduit />
        </div>
    )
}